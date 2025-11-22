# DevHub Nigeria: Cultivating the Next Generation of African Developers

DevHub Nigeria is a dynamic platform dedicated to accelerating the growth of technical talent within Nigeria and across Africa. We connect aspiring and established developers with world-class training, mentorship, and a vibrant community focused on solving local problems with global standards.

---

## ✨ Features & Offerings

DevHub Nigeria serves as a central hub for learning, collaboration, and career acceleration for African tech professionals.

| Feature | Description | Key Benefit |
|---------|-------------|-------------|
| 🧑‍💻 **Structured Curricula** | Comprehensive courses covering in-demand stacks: MERN, Python/Django, Cloud Engineering (AWS/Azure), Mobile (Flutter/React Native). | Acquire job-ready skills efficiently. |
| 📝 **Industry Mentorship** | Direct access to senior engineers and tech leaders from top local and international companies. | Receive personalized career guidance and technical feedback. |
| 🤝 **Community & Events** | Regular virtual and in-person meetups, hackathons, and webinars to foster collaboration and networking. | Build a professional network and find co-founders or teammates. |
| 💼 **Career Services** | Resume workshops, interview prep, and placement opportunities through our partner companies. | Bridge the gap between learning and employment. |
| 💡 **Open Source Projects** | Contribute to real-world projects addressing Nigerian social and economic challenges. | Gain practical experience and strengthen your portfolio. |

---

## 🚀 Getting Started

### 1. Join the Community
Engage through our primary channels:

- **Discord Server:** Real-time Q&A, study partners, and announcements.  
- **Official Website:** Explore course catalogs, read success stories, and sign up for events.  

---

### 2. Enrollment

Structured learning paths are available via the Enrollment Page:

1. Navigate to the **[Courses]** section on the website.  
2. Check prerequisites and required commitment for your desired track (e.g., Full-Stack Web Development).  
3. Complete the enrollment form (name, email, course selection, start date).  
4. Data will be sent to our backend and stored in MongoDB.

---

### 3. Frontend & Backend Interaction

The project uses a **MERN stack**:

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  

**API Routes:**  

| Route | Method | Description |
|-------|--------|-------------|
| `/api/users` | POST | Create a new user (enrollment) |
| `/api/users` | GET | Get all users |
| `/api/users/:id` | GET | Get a single user |
| `/api/users/:id` | PUT | Update user info |
| `/api/users/:id` | DELETE | Delete a user |

The frontend enrollment form calls the `/api/users` POST endpoint to save enrollment data. CORS is enabled in the backend to allow cross-origin requests from React.

---

### 4. Project Structure

devhub-nigeria/
├── backend/                  # Node.js / Express server
│   ├── config/
│   │   └── connectDB.js       # MongoDB connection setup
│   ├── controllers/
│   │   └── userController.js  # CRUD logic for users
│   ├── models/
│   │   └── User.js            # Mongoose User model
│   ├── routes/
│   │   └── userRoutes.js      # Express routes
│   └── server.js              # Backend entry point
│
├── frontend/                  # React client
│   ├── public/                # Public assets (index.html, images, etc.)
│   └── src/
│       ├── components/        # Reusable components
│       │   ├── Auth/
│       │   │   └── EnrollmentPage.jsx
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   └── ...other reusable components
│       ├── pages/             # Page components
│       │   ├── AboutPage.jsx
│       │   ├── CoursesPage.jsx
│       │   ├── CommunityPage.jsx
│       │   └── ContactPage.jsx
│       ├── App.js             # Main React app
│       └── index.js           # React entry point
│
├── .env                       # Environment variables (not uploaded to GitHub)
├── package.json               # Project dependencies and scripts
└── README.md                  # Project description and instructions


---

### 5. Prerequisites

Before running locally:

- Node.js LTS (v18+ recommended)  
- npm or yarn  
- MongoDB (local or Atlas)  
- Git  

---

### 6. Installation & Setup

**Clone the repository:**
```bash
git clone https://github.com/your-username/devhub-nigeria.git
cd devhub-nigeria

cd backend
npm install

MONGO_URI=your_mongodb_connection_string
PORT=5000

npm run dev   # or node server.js

cd frontend
npm install
npm start

The app should now be running at http://localhost:3000 and connected to the backend.

7. Deployment

You can deploy this MERN app using Vercel (frontend) and Render/Heroku (backend) or Vercel serverless functions.

Steps:

Push your frontend to GitHub.

Connect the repository to Vercel.

Set environment variables in Vercel (if needed).

Deploy backend separately on Render/Heroku with MongoDB URI.

Update the frontend API base URL to the deployed backend.

8. Security

Sensitive information like MongoDB URI or API keys should be stored in .env and never committed.

If you find security issues, contact: security@devhubnigeria.com.

9. License

This project is licensed under the MIT License – see the LICENSE.md file for details.

10. Acknowledgements

Nigerian tech diaspora for mentorship and resources

Community members contributing their time and expertise

Partner companies supporting digital empowerment across Africa



