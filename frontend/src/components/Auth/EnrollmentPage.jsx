import React from "react";
import { Link } from "react-router-dom";

const EnrollmentPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full bg-navy/5 p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-navy mb-6 text-center">
          Enroll Now
        </h1>

        <p className="text-navy/80 text-center mb-8">
          Join DevHub Nigeria today and start building real-world projects, 
          getting mentorship, and accelerating your tech career.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-coral text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-coral/90 transition-all"
          >
            Enroll Now
          </button>
        </form>

        <p className="mt-6 text-center text-navy/70 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan font-semibold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EnrollmentPage;
