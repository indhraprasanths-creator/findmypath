import React from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const setUserType = async (type) => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      alert("No user found. Please log in.");
      return;
    }

    // Step 1: Insert into profiles
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: user.id,
      email: user.email,
      user_type: type,
    });

    if (profileError) {
      console.error("Error saving profile:", profileError.message);
      alert("Error saving user type: " + profileError.message);
      return;
    }

    // Step 2: Check if user exists in the student table
    let studentCheckResult;
    let studentInsertResult;

    if (type === "school") {
      studentCheckResult = await supabase
        .from("school_students")
        .select("user_id")
        .eq("user_id", user.id)
        .single();

      if (studentCheckResult.error) {
        // If no rows found, studentCheckResult.error will be populated
        if (studentCheckResult.error.code === "PGRST116") {
          // No rows found, proceed with insertion
          studentInsertResult = await supabase.from("school_students").insert({
            user_id: user.id,
            email: user.email,
            grade: "Not Set",
            stream: "Not Set",
            career_interest: "Not Set",
          });
        } else {
          // Handle other errors such as multiple rows
          console.error("Error checking user existence:", studentCheckResult.error.message);
          alert("Error checking user existence");
          return;
        }
      } else {
        alert("User already exists as a school student.");
        return;
      }
    } else if (type === "college") {
      studentCheckResult = await supabase
        .from("college_students")
        .select("user_id")
        .eq("user_id", user.id)
        .single();

      if (studentCheckResult.error) {
        // If no rows found, studentCheckResult.error will be populated
        if (studentCheckResult.error.code === "PGRST116") {
          // No rows found, proceed with insertion
          studentInsertResult = await supabase.from("college_students").insert({
            user_id: user.id,
            email: user.email,
            course: "Not Set",
            year: "Not Set",
            plan: "Not Set",
          });
        } else {
          // Handle other errors such as multiple rows
          console.error("Error checking user existence:", studentCheckResult.error.message);
          alert("Error checking user existence");
          return;
        }
      } else {
        alert("User already exists as a college student.");
        return;
      }
    }

    const { error: studentError } = studentInsertResult;

    if (studentError) {
      console.error("Error saving student data:", studentError.message);
      alert("Error saving student data: " + studentError.message);
      return;
    }

    // Step 3: Redirect to form page based on user type
    if (type === "school") {
      navigate("/student-form");
    } else {
      navigate("/user-form");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-xl font-semibold mb-6 text-purple-700">
        Select Your User Type
      </h1>
      <div className="flex gap-6">
        <button
          onClick={() => setUserType("school")}
          className="px-8 py-4 border rounded-md font-bold text-white bg-blue-500 hover:bg-blue-700 transition duration-300"
        >
          School Student
        </button>
        <button
          onClick={() => setUserType("college")}
          className="px-8 py-4 border rounded-md font-bold text-white bg-green-500 hover:bg-green-700 transition duration-300"
        >
          College Student
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
