import React, { useState } from 'react';
import { supabase } from '../supabase';

const UserForm = () => {
  const [formData, setFormData] = useState({
    course: '',
    year: '',
    interest: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = supabase.auth.user(); // Get current user

    // Based on user type, insert into college_students or school_students
    let table = ''; // Default table
    if (user?.user_type === 'college') {
      table = 'college_students';
    } else if (user?.user_type === 'school') {
      table = 'school_students';
    }

    try {
      // Insert or update logic using upsert
      const { error } = await supabase.from(table).upsert([
        {
          user_id: user.id,
          email: user.email,
          course: formData.course,
          year: formData.year,
          plan: formData.interest,
        },
      ], { onConflict: ['user_id'] });

      if (error) throw error;

      setMessage('Data saved/updated successfully!');
      setFormData({ course: '', year: '', interest: '' });
    } catch (error) {
      setMessage('Error saving data: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">User Information</h2>

        <form onSubmit={handleSubmit}>
          {/* Course Dropdown */}
          <label className="block mb-2 font-medium">Current Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Your Course</option>
            <optgroup label="Computer Applications & IT">
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
              <option value="B.Sc. Data Science">B.Sc. Data Science</option>
              <option value="B.Sc. AI & ML">B.Sc. AI & ML</option>
            </optgroup>
            <optgroup label="Medical & Healthcare">
              <option value="MBBS">MBBS</option>
              <option value="BDS">BDS</option>
              <option value="BAMS">BAMS</option>
              <option value="BHMS">BHMS</option>
              <option value="BPT">BPT</option>
              <option value="B.Sc. Nursing">B.Sc. Nursing</option>
              <option value="B.Sc. Radiology">B.Sc. Radiology</option>
              <option value="B.Sc. Nutrition">B.Sc. Nutrition</option>
              <option value="B.Sc. MLT">B.Sc. MLT</option>
            </optgroup>
            <optgroup label="Engineering">
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="AI & DS">AI & DS</option>
              <option value="Robotics">Robotics</option>
            </optgroup>
          </select>

          {/* Year Dropdown */}
          <label className="block mb-2 font-medium">Current Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="Final Year">Final Year</option>
          </select>

          {/* Career Interests */}
          <label className="block mb-2 font-medium">Career Interests</label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">Select Career Interest</option>
            <option value="Software Development & IT">Software Development & IT</option>
            <option value="Medicine & Healthcare">Medicine & Healthcare</option>
            <option value="Engineering">Engineering</option>
            <option value="Business & Entrepreneurship">Business & Entrepreneurship</option>
            <option value="Finance & Investment Banking">Finance & Investment Banking</option>
            <option value="CA / CFA">CA / CFA</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Law & Judiciary">Law & Judiciary</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Aviation & Aerospace">Aviation & Aerospace</option>
            <option value="Environmental Sustainability">Environmental Sustainability</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition w-full"
          >
            Submit
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
      </div>
    </div>
  );
};

export default UserForm;
