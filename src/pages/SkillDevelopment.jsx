import React from "react";

const skillList = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
    link: "https://www.freecodecamp.org/",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA for interviews and coding contests using platforms like LeetCode and GFG.",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    title: "Machine Learning",
    description: "Understand ML models and data pipelines with Python and Scikit-learn.",
    link: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform apps using Flutter or React Native.",
    link: "https://flutter.dev/docs/get-started",
  },
  {
    title: "Cybersecurity Basics",
    description: "Explore ethical hacking, network security, and digital forensics.",
    link: "https://www.cybrary.it/",
  },
  {
    title: "UI/UX Design",
    description: "Design user-friendly interfaces with Figma and prototyping tools.",
    link: "https://www.coursera.org/specializations/ui-ux-design",
  },
  {
    title: "Cloud Computing",
    description: "Learn AWS, Azure, or GCP to deploy and scale applications.",
    link: "https://www.aws.training/",
  },
  {
    title: "Soft Skills",
    description: "Enhance communication, teamwork, and emotional intelligence.",
    link: "https://www.linkedin.com/learning/paths/develop-your-soft-skills",
  },
  {
    title: "Entrepreneurship",
    description: "Understand business models, startup funding, and pitching ideas.",
    link: "https://www.udemy.com/course/entrepreneurship-course/",
  },
  {
    title: "Digital Marketing",
    description: "Learn SEO, content marketing, social media, and analytics.",
    link: "https://www.coursera.org/specializations/digital-marketing",
  },
  {
    title: "Database Management",
    description: "Understand SQL, NoSQL, and data modeling techniques.",
    link: "https://www.mysqltutorial.org/",
  },
  {
    title: "DevOps & CI/CD",
    description: "Automate builds and deployments using GitHub Actions, Jenkins, and Docker.",
    link: "https://roadmap.sh/devops",
  },
  {
    title: "Resume Building",
    description: "Create a professional resume and cover letter with examples.",
    link: "https://www.resumegenius.com/resume-builder",
  },
  {
    title: "Public Speaking",
    description: "Overcome stage fear and deliver impactful presentations.",
    link: "https://www.coursera.org/learn/public-speaking",
  },
  {
    title: "Time Management",
    description: "Learn how to manage tasks, set priorities, and avoid burnout.",
    link: "https://www.mindtools.com/pages/main/newMN_HTE.htm",
  },
];

const SkillDevelopment = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Skill Development Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillList.map((skill, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-center text-indigo-700">{skill.title}</h2>
            <p className="text-sm text-gray-600 mt-3 text-center">{skill.description}</p>
            <div className="mt-4 text-center">
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline text-sm"
              >
                Visit Resource
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDevelopment;
