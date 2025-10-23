import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; // Ensure you're importing the Supabase client

const StudentForm = () => {
  const [formData, setFormData] = useState({
    grade: '',
    stream: '',
    interest: '',
    careerInterest: '',
    course: '',
    year: '',
    plan: '',
  });

  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserType = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error.message);
        setMessage('Error fetching user information');
        return;
      }

      const { user } = data;
      // Check for the profile info based on the user type
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('id', user.id)
        .single();

      if (profileError) {
        setMessage('Error fetching user profile');
        return;
      }

      setUserType(profileData.user_type);
      setLoading(false);
    };

    fetchUserType();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Get the current authenticated user
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Error fetching user:', error.message);
      setMessage('Error fetching user information');
      return;
    }

    const user = data.user; // Extract user object

    // Handle form submission based on user type
    try {
      if (userType === 'school') {
        const { error } = await supabase
          .from('school_students')
          .upsert(
            [
              {
                user_id: user.id,
                email: user.email,
                grade: formData.grade,
                stream: formData.stream,
                interest: formData.careerInterest,
              },
            ],
            { onConflict: ['user_id'] } // This will ensure it updates on subsequent submissions
          );

        if (error) throw error;

        setMessage('School student information saved/updated successfully!');
      } else if (userType === 'college') {
        const { error } = await supabase
          .from('college_students')
          .upsert(
            [
              {
                user_id: user.id,
                email: user.email,
                course: formData.course,
                year: formData.year,
                stream: formData.stream,
                interest: formData.careerInterest,
                plan: formData.plan,
              },
            ],
            { onConflict: ['user_id'] } // Ensure unique conflict handling
          );

        if (error) throw error;

        setMessage('College student information saved/updated successfully!');
      }

      setFormData({
        grade: '',
        stream: '',
        interest: '',
        careerInterest: '',
        course: '',
        year: '',
        plan: '',
      }); // Reset form
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  // Handle back action
  const handleBack = () => {
    window.history.back(); // Navigate back
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Navbar */}
      <div className="p-4 shadow-md">
        <h1 className="text-2xl font-bold text-purple-700">BuildMyPath</h1>
      </div>

      {/* Form Container */}
      <div className="flex justify-center items-center">
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 w-full max-w-xl">
          <h2 className="text-xl font-semibold flex items-center mb-6">
            <span className="mr-2 text-2xl">👤</span> User Information
          </h2>

          <div className="space-y-4">
            {userType === 'school' && (
              <>
                {/* Grade */}
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                >
                  <option value="">Current Grade (10th/11th/12th)</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                </select>
              </>
            )}

            {/* Stream */}
            <select
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            >
              <option value="">Interested Stream</option>
              <option value="Science_PCM">Science (PCM - Physics, Chemistry, Mathematics)</option>
              <option value="Science_PCB">Science (PCB - Physics, Chemistry, Biology)</option>
              <option value="Science_PCMB">Science (PCMB - Physics, Chemistry, Mathematics, Biology)</option>
              <option value="Commerce">Commerce</option>
              <option value="Commerce_Math">Commerce with Mathematics</option>
              <option value="Humanities">Humanities / Arts</option>
              <option value="Vocational">Vocational Studies</option>
            </select>

            {/* Career Interest */}
            <input
              type="text"
              name="careerInterest"
              value={formData.careerInterest}
              onChange={handleChange}
              placeholder="Enter Career Interest"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />

            {userType === 'college' && (
              <>
                {/* Course */}
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Course Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />

                {/* Year */}
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Year of Study"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />

                {/* Plan */}
                <input
                  type="text"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  placeholder="Career Plan"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>

          {/* Error or Success Message */}
          {message && (
            <div className="mt-4 text-center text-lg text-green-600">
              {message}
            </div>
          )}

          {/* Back Button */}
          <div className="mt-6 text-right">
            <button
              onClick={handleBack}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white text-sm">
        © 2023 - 2025 BuildMyCareer® Global Inc. •{' '}
        <a href="#" className="underline">Privacy Policy</a> •{' '}
        <a href="#" className="underline">Cookie Settings</a>
      </footer>
    </div>
  );
};

export default StudentForm;
