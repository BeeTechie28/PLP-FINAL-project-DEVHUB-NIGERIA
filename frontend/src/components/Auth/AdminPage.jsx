import React, { useState, useEffect } from 'react';
import { 
    initializeApp 
} from 'firebase/app';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut,
    signInWithCustomToken,
    signInAnonymously
} from 'firebase/auth';
import { 
    getFirestore, 
    collection, 
    query, 
    onSnapshot, 
    setLogLevel
} from 'firebase/firestore';
import { User, Lock, LogIn, LogOut, Loader, BarChart3, Users, Mail, Phone, Calendar } from 'lucide-react';

// Set Firebase log level for debugging
setLogLevel('debug');

const DEVHUB_BACKGROUND = '#011032';
const DEVHUB_CYAN = '#13F9F9';
const DEVHUB_ORANGE = '#FF7F5C';

// --- Firebase Initialization and Auth Logic ---
const useFirebase = () => {
    const [auth, setAuth] = useState(null);
    const [db, setDb] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firebaseError, setFirebaseError] = useState('');

    // Access mandatory global variables from the environment
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

    useEffect(() => {
        if (Object.keys(firebaseConfig).length === 0) {
            setFirebaseError("Firebase configuration is missing. Cannot initialize database.");
            setLoading(false);
            return;
        }

        try {
            const app = initializeApp(firebaseConfig);
            const firestoreDb = getFirestore(app);
            const authInstance = getAuth(app);
            
            setDb(firestoreDb);
            setAuth(authInstance);

            // 1. Initial Authentication Check (for canvas environment)
            const authenticateInitial = async (authInstance) => {
                try {
                    if (initialAuthToken) {
                        await signInWithCustomToken(authInstance, initialAuthToken);
                        console.log("Signed in with custom token (Admin access required).");
                    } else {
                        // Use anonymous sign-in as a fallback if token is missing
                        // (though for /admin, a proper email/password login is expected)
                        await signInAnonymously(authInstance); 
                        console.log("Signed in anonymously (Login required for Admin features).");
                    }
                } catch (e) {
                    setFirebaseError(`Initial Authentication failed: ${e.message}`);
                    console.error('Firebase initial auth failed:', e);
                }
            };
            authenticateInitial(authInstance);


            // 2. Auth State Listener
            const unsubscribe = onAuthStateChanged(authInstance, (user) => {
                setCurrentUser(user);
                setLoading(false);
            });

            return () => unsubscribe(); // Cleanup listener
        } catch (e) {
            setFirebaseError(`Firebase initialization failed: ${e.message}`);
            console.error('Firebase initialization failed:', e);
            setLoading(false);
        }
    }, []);

    return { auth, db, currentUser, loading, firebaseError, appId };
};

// --- Login Component ---
const AdminLogin = ({ auth, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoginLoading(true);
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // onAuthStateChanged listener handles state update (currentUser)
        } catch (e) {
            console.error('Login Error:', e);
            // Generic error message for security
            setError('Login failed. Please check your email and password.'); 
        } finally {
            setLoginLoading(false);
        }
    };

    const InputField = ({ Icon, type, value, onChange, placeholder }) => (
        <div className="input-group">
            <Icon size={20} className="text-gray-400" />
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent border-none text-white focus:outline-none placeholder-gray-500"
            />
        </div>
    );

    return (
        <div className="flex flex-col items-center p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl w-full max-w-sm">
            <div className="logo mb-6 flex items-center">
                <BarChart3 size={32} color={DEVHUB_ORANGE} />
                <h2 className="text-2xl font-bold ml-2 text-white">Admin Access</h2>
            </div>
            
            <form onSubmit={handleLogin} className="w-full space-y-5">
                <InputField 
                    Icon={User} 
                    type="email" 
                    value={email} 
                    onChange={setEmail} 
                    placeholder="Admin Email" 
                />
                <InputField 
                    Icon={Lock} 
                    type="password" 
                    value={password} 
                    onChange={setPassword} 
                    placeholder="Password" 
                />

                {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
                
                <button 
                    type="submit" 
                    className={`w-full py-3 mt-4 rounded-lg font-bold transition duration-300 flex items-center justify-center 
                        ${loginLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 shadow-cyan'}`}
                    disabled={loginLoading}
                >
                    {loginLoading ? (
                        <Loader size={20} className="animate-spin" />
                    ) : (
                        <>
                            <LogIn size={20} className="mr-2" />
                            Login
                        </>
                    )}
                </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">
                *This area is restricted to DevHub team members only.
            </p>
        </div>
    );
};

// --- Dashboard Component (Protected Route) ---
const AdminDashboard = ({ auth, db, appId, currentUser }) => {
    const [enrollments, setEnrollments] = useState([]);
    const [loadingEnrollments, setLoadingEnrollments] = useState(true);
    const [dataError, setDataError] = useState('');

    useEffect(() => {
        if (!db || !currentUser || currentUser.isAnonymous) {
            // Stop if DB is not ready or if user is anonymous (unauthorized for dashboard)
            setLoadingEnrollments(false);
            return;
        }

        setDataError('');
        setLoadingEnrollments(true);

        // Access the public collection where the enrollment form submits data
        // Path: /artifacts/{appId}/public/data/enrollments
        const enrollmentsColRef = collection(db, 'artifacts', appId, 'public', 'data', 'enrollments');
        const q = query(enrollmentsColRef);

        // Real-time listener for enrollments
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedEnrollments = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            // Sort by timestamp (newest first)
            fetchedEnrollments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setEnrollments(fetchedEnrollments);
            setLoadingEnrollments(false);
        }, (error) => {
            console.error("Error fetching enrollments:", error);
            setDataError("Failed to load enrollment data. Check Firestore rules/connection.");
            setLoadingEnrollments(false);
        });

        return () => unsubscribe(); // Cleanup listener
    }, [db, currentUser, appId]);

    const handleLogout = () => {
        if (auth) {
            signOut(auth).catch(e => console.error("Logout error:", e));
        }
    };

    const formatDate = (isoString) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    return (
        <div className="p-4 md:p-8 bg-gray-900 min-h-screen text-white">
            <header className="flex justify-between items-center pb-6 border-b border-gray-700 mb-8">
                <h1 className="text-3xl font-extrabold text-white flex items-center">
                    <BarChart3 size={32} color={DEVHUB_CYAN} className="mr-3"/>
                    DevHub Admin Dashboard
                </h1>
                <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400 hidden sm:block">Logged in as: <span className="font-mono text-xs text-cyan-400">{currentUser.email || 'Admin'}</span></p>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-200 shadow-lg"
                    >
                        <LogOut size={18} className="mr-2"/>
                        Logout
                    </button>
                </div>
            </header>

            <h2 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                <Users size={24} className="mr-2 text-orange-400" /> Recent Enrollments ({enrollments.length})
            </h2>

            {loadingEnrollments ? (
                <div className="flex justify-center items-center h-48">
                    <Loader size={36} className="animate-spin text-cyan-500" />
                    <p className="ml-3 text-lg">Loading lead data...</p>
                </div>
            ) : dataError ? (
                <div className="p-4 bg-red-800/20 border border-red-500 rounded-lg text-red-300">
                    <p>{dataError}</p>
                </div>
            ) : (
                <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Course</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden sm:table-cell">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">Source</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {enrollments.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-700 transition duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                        <div className="flex items-center">
                                            <User size={16} className="mr-2 text-cyan-400 hidden md:inline" />
                                            {lead.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-300 font-semibold">
                                        {lead.course}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden sm:table-cell">
                                        <div className="flex flex-col space-y-1">
                                            <span className="flex items-center"><Mail size={14} className="mr-2"/>{lead.email}</span>
                                            <span className="flex items-center"><Phone size={14} className="mr-2"/>{lead.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 italic hidden md:table-cell">
                                        {lead.howTheyHeard}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-2"/>
                                            {formatDate(lead.timestamp)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {!enrollments.length && !loadingEnrollments && !dataError && (
                <div className="p-10 text-center text-gray-500 bg-gray-800 rounded-lg">
                    No enrollment leads have been captured yet.
                </div>
            )}
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const { auth, db, currentUser, loading, firebaseError, appId } = useFirebase();
    
    // Determine if the user is a logged-in Admin (i.e., not anonymous)
    const isAdmin = currentUser && !currentUser.isAnonymous && currentUser.email;

    if (loading) {
        return (
            <div className={`flex items-center justify-center min-h-screen bg-[${DEVHUB_BACKGROUND}] text-white flex-col`}>
                <Loader size={48} className="animate-spin text-cyan-500" />
                <p className="mt-4">Initializing Firebase...</p>
            </div>
        );
    }

    if (firebaseError) {
        return (
            <div className={`flex items-center justify-center min-h-screen bg-[${DEVHUB_BACKGROUND}] text-white p-4`}>
                <div className="p-6 bg-red-900/50 border border-red-500 rounded-lg max-w-lg">
                    <h2 className="text-xl font-bold mb-2">Initialization Error</h2>
                    <p>{firebaseError}</p>
                    <p className="mt-2 text-sm text-red-300">Check your `__firebase_config` and console for details.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className={`min-h-screen flex items-center justify-center bg-[${DEVHUB_BACKGROUND}]`}>
            {/* Embedded Tailwind CSS Utilities and Custom Styles */}
            <style jsx="true">
                {`
                    .bg-\\[\\#011032\\] { background-color: ${DEVHUB_BACKGROUND}; }
                    .shadow-cyan { box-shadow: 0 0 15px 0 rgba(19, 249, 249, 0.5); }

                    .input-group {
                        display: flex;
                        align-items: center;
                        padding: 10px 15px;
                        background-color: #1a233b;
                        border-radius: 8px;
                        border: 1px solid transparent;
                        transition: border-color 0.3s;
                    }

                    .input-group:focus-within {
                        border-color: ${DEVHUB_ORANGE};
                    }
                `}
            </style>

            {isAdmin ? (
                // Protected Dashboard
                <AdminDashboard 
                    auth={auth} 
                    db={db} 
                    appId={appId} 
                    currentUser={currentUser} 
                />
            ) : (
                // Admin Login
                <AdminLogin auth={auth} />
            )}
        </div>
    );
};

export default App;