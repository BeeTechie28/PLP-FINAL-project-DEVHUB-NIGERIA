import React, { useState } from 'react';
import { Loader2, User, Mail, BookOpen, Clock, ArrowRight } from 'lucide-react';

const EnrollmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: 'Full Stack Web Development',
    startDate: 'Immediate',
  });

  const [loading, setLoading] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnrollmentStatus(null);
    setLoading(true);

    try {
      const response = await fetch('https://plp-final-project-devhub-nigeria.onrender.com/api/users', { // backend route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setEnrollmentStatus('success');
        setFormData({
          fullName: '',
          email: '',
          course: 'Full Stack Web Development',
          startDate: 'Immediate',
        });
      } else {
        console.error(data);
        setEnrollmentStatus('error');
      }
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      setEnrollmentStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <Loader2 className="w-10 h-10 animate-spin text-cyan" />
        <p className="ml-3 text-lg text-cyan">Submitting your enrollment...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cyan mb-3 text-center">
          Enroll in DevHub Nigeria
        </h1>
        <form onSubmit={handleSubmit} className="bg-card-navy p-6 sm:p-10 rounded-2xl shadow-2xl border border-cyan/20 space-y-6">

          <div className="grid sm:grid-cols-2 gap-6">
            <label>
              <span className="text-gray-300 font-medium flex items-center mb-2">
                <User className="w-5 h-5 mr-2 text-cyan"/> Full Name
              </span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-navy/50 border border-cyan/40 focus:border-cyan text-white focus:ring focus:ring-cyan/30 transition-colors duration-200"
              />
            </label>
            <label>
              <span className="text-gray-300 font-medium flex items-center mb-2">
                <Mail className="w-5 h-5 mr-2 text-cyan"/> Email Address
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-navy/50 border border-cyan/40 focus:border-cyan text-white focus:ring focus:ring-cyan/30 transition-colors duration-200"
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <label>
              <span className="text-gray-300 font-medium flex items-center mb-2">
                <BookOpen className="w-5 h-5 mr-2 text-cyan"/> Preferred Course
              </span>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-navy/50 border border-cyan/40 focus:border-cyan text-white appearance-none focus:ring focus:ring-cyan/30 transition-colors duration-200 cursor-pointer"
              >
                <option value="Full Stack Web Development">Full Stack Web Development</option>
                <option value="Backend Engineering (Python/Go)">Backend Engineering (Python/Go)</option>
                <option value="Mobile Development (React Native)">Mobile Development (React Native)</option>
                <option value="Data Science & ML">Data Science & ML</option>
              </select>
            </label>

            <label>
              <span className="text-gray-300 font-medium flex items-center mb-2">
                <Clock className="w-5 h-5 mr-2 text-cyan"/> Preferred Start Date
              </span>
              <select
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-navy/50 border border-cyan/40 focus:border-cyan text-white appearance-none focus:ring focus:ring-cyan/30 transition-colors duration-200 cursor-pointer"
              >
                <option value="Immediate">Next Available Cohort (Immediate)</option>
                <option value="1 Month">In 1 Month</option>
                <option value="3 Months">In 3 Months</option>
                <option value="6 Months">In 6 Months or Later</option>
              </select>
            </label>
          </div>

          {enrollmentStatus === 'success' && (
            <div className="p-4 rounded-xl bg-cyan/20 border border-cyan text-cyan font-medium text-center">
              Success! Your enrollment has been submitted.
            </div>
          )}
          {enrollmentStatus === 'error' && (
            <div className="p-4 rounded-xl bg-red-800/20 border border-red-500 text-red-400 font-medium text-center">
              Error! Failed to submit enrollment.
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-xl shadow-lg bg-coral hover:bg-coral/90 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]"
          >
            <span>Complete Enrollment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentPage;
