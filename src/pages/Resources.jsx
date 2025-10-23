function ResourcesAndArt() {
  const scienceItems = [
    "Engineering (B.Tech/B.E.)",
    "Medicine (MBBS, BDS, Nursing)",
    "B.Sc. (Bachelor of Science)",
    "BCA (Bachelor of Computer Applications)",
    "Pharmacy (B.Pharm)",
    "BAMS (Bachelor of Ayurvedic Medicine and Surgery)",
    "BDS (Bachelor of Dental Surgery)",
    "Biotechnology",
    "Forensic Science",
    "Environmental Science",
    "Agriculture"
  ];

  const commerceItems = [
    "B.Com (Bachelor of Commerce)",
    "BBA (Bachelor of Business Administration)",
    "BMS (Bachelor of Management Studies)",
    "BCA (Bachelor of Computer Applications)",
    "CA (Chartered Accountancy)",
    "CMA (Cost Management Accountancy)",
    "CS (Company Secretary)",
    "Hotel Management",
    "Tourism & Travel Management",
    "Fashion Designing",
    "Event Management",
    "Advertising & Marketing"
  ];

  const artsItems = [
    "BA (Bachelor of Arts)",
    "BFA (Bachelor of Fine Arts)",
    "B.Des (Bachelor of Design)",
    "Journalism & Mass Communication",
    "Psychology",
    "Political Science",
    "History",
    "Philosophy",
    "Sociology",
    "Law (5-year integrated course)",
    "Social Work",
    "Tourism & Travel Management",
    "Animation & Multimedia",
    "Film Making"
  ];

  const StreamCard = ({ title, color, items }) => (
    <div className={`rounded-2xl shadow-lg p-6 text-white transition-transform transform hover:scale-105 ${color}`}>
      <h2 className="text-2xl font-semibold mb-4 border-b border-white pb-2">{title} Stream</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="hover:underline">{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700">Your Resource Hub</h1>
        <p className="text-gray-700 mt-2">Articles, Materials & More</p>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          After completing 12th grade, it's time to take your next big step. Whether you’re from Science, Commerce, or Arts, 
          there are many exciting opportunities waiting for you. Choosing the right course, entrance exam, and college is 
          an important decision that will shape your future. This guide is here to make that journey easier and clearer for you.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StreamCard title="Science" color="bg-blue-600" items={scienceItems} />
        <StreamCard title="Commerce" color="bg-purple-600" items={commerceItems} />
        <StreamCard title="Arts" color="bg-gray-800" items={artsItems} />
      </div>

      {/* Science Stream Content */}
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-7xl font-bold text-blue-600">SCIENCE <span className="text-gray-800">STREAM</span></h2>
          <p className="text-gray-600 mt-2 mb-8">
            This section has free resources and articles for Science stream students. Find helpful links for courses like Engineering, Medicine, B.Sc., BCA, Pharmacy, and more. These websites will help you learn better and plan your career.
          </p>

          {/* Engineering */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Engineering (B.Tech/B.E.)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Study Materials & Projects: Access eBooks, notes, and project reports across engineering disciplines on <a href="https://www.studynama.com" target="_blank" className="text-blue-600 underline">Studynama</a>.</li>
              <li>Industry Trends: Explore emerging fields like AI and Cloud Computing in engineering through <a href="https://blog.shooliniuniversity.com" target="_blank" className="text-blue-600 underline">Shoolini University</a>’s blog.</li>
              <li>Skill Development: Understand the importance of industry-readiness and practical exposure in engineering education from this <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" className="text-blue-600 underline">PMC article</a>.</li>
            </ul>
          </div>

          {/* Medicine */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Medicine (MBBS, BDS, Nursing)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Research Funding: Discover funding opportunities for medical and nursing research in India via this <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" className="text-blue-600 underline">PubMed Central article</a>.</li>
              <li>Educational Resources: Learn about the usage patterns of educational resources among first-year medical students in this <a href="https://journals.lww.com/lww-journals/pages/default.aspx" target="_blank" className="text-blue-600 underline">Lippincott Journals</a> study.</li>
              <li>Self-Medication Practices: Understand the prevalence and implications of self-medication among medical students from this <a href="https://www.wisdomlib.org/" target="_blank" className="text-blue-600 underline">Wisdomlib study</a>.</li>
            </ul>
          </div>

          {/* B.Sc. */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">B.Sc. (Bachelor of Science)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Course Overview: Get comprehensive information on B.Sc. courses, including subjects, eligibility, and top colleges in India, from <a href="https://www.shiksha.com/" target="_blank" className="text-blue-600 underline">Shiksha</a>.</li>
              <li>Specializations: Explore various B.Sc. specializations and their career prospects in this <a href="https://www.jainuniversity.ac.in/blog" target="_blank" className="text-blue-600 underline">Jain University blog</a>.</li>
            </ul>
          </div>

          {/* BCA */}
          <div>
            <h3 className="font-semibold text-lg">BCA (Bachelor of Computer Applications)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Curriculum Insights: Understand the BCA program structure, including programming languages and computer fundamentals, from <a href="https://www.mgu.ac.in/" target="_blank" className="text-blue-600 underline">MGU India</a>.</li>
              <li>Course Guide: Get a detailed guide on BCA courses, covering subjects and career opportunities, from <a href="https://globaltree.in/" target="_blank" className="text-blue-600 underline">Global Tree</a>.</li>
            </ul>
          </div>

          {/* Additional Streams (e.g., Pharmacy, BAMS, etc.) */}
          <div className="mt-12">
            <h3 className="font-semibold text-lg">Pharmacy (B.Pharm)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Educational Structure: Learn about the B.Pharm program's duration, curriculum, and practical training requirements in this <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" className="text-blue-600 underline">PubMed Central article</a>.</li>
              <li>Curriculum Development: Understand the need for revamping pharmacy education in India to align with global trends from this <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" className="text-blue-600 underline">PMC article</a>.</li>
            </ul>
          </div>

          {/* Continue adding more courses in the same manner */}
        </div>
 {/* COMMERCE STREAM */}
    <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-7xl font-bold text-purple-600">COMMERCE <span className="text-gray-800">STREAM</span></h2>
          <p className="text-gray-600 mt-2 mb-8">
            This section offers free learning resources and articles for Commerce students. Explore useful links for Accounting, Business, Economics, CA, Banking, and more to understand subjects and career options.
          </p>

          {/* Bachelor of Commerce (B.Com) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Commerce (B.Com)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Course Overview: Detailed information on B.Com courses, including subjects, eligibility, and career opportunities. 🔗 <a href="https://www.hindustantimes.com" target="_blank" className="text-blue-600 underline">Hindustan Times</a></li>
              <li>Career Paths: Explore various career options after B.Com, such as Accountant, Auditor, Tax Consultant, and Banker. 🔗 <a href="https://www.indeed.co.in" target="_blank" className="text-blue-600 underline">Indeed India</a></li>
            </ul>
          </div>

          {/* Bachelor of Business Administration (BBA) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Business Administration (BBA)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Program Details: Insights into the BBA program structure, including specializations and career prospects. 🔗 <a href="https://unstop.com" target="_blank" className="text-blue-600 underline">Unstop</a></li>
              <li>Salary Expectations: Understand the potential salary ranges for BBA graduates in various roles. 🔗 <a href="https://www.careers360.com" target="_blank" className="text-blue-600 underline">Careers360</a></li>
            </ul>
          </div>

          {/* Chartered Accountancy (CA) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Chartered Accountancy (CA)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Course Pathway: Step-by-step guide on becoming a Chartered Accountant, including exam details and training requirements. 🔗 <a href="https://www.sukrishna.in" target="_blank" className="text-blue-600 underline">Sukrishna</a></li>
              <li>Salary Insights: Explore the earning potential for CAs at different career stages. 🔗 <a href="https://www.unstop.com" target="_blank" className="text-blue-600 underline">Unstop</a></li>
            </ul>
          </div>

          {/* Company Secretary (CS) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Company Secretary (CS)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Role Overview: Understand the responsibilities and importance of a Company Secretary in corporate governance. 🔗 <a href="https://www.indeed.co.in" target="_blank" className="text-blue-600 underline">Indeed India</a></li>
              <li>Career Progression: Learn about the career trajectory and opportunities available for CS professionals. 🔗 <a href="https://www.careers360.com" target="_blank" className="text-blue-600 underline">Careers360</a></li>
            </ul>
          </div>

          {/* Cost and Management Accountancy (CMA) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Cost and Management Accountancy (CMA)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Program Details: Information on the CMA course structure, eligibility, and examination process. 🔗 <a href="https://www.unstop.com" target="_blank" className="text-blue-600 underline">Unstop</a></li>
              <li>Industry Relevance: Explore how CMAs contribute to financial planning and cost management in organizations. 🔗 <a href="https://www.careers360.com" target="_blank" className="text-blue-600 underline">Careers360</a></li>
            </ul>
          </div>

          {/* Bachelor of Economics */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Economics</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Course Insights: Detailed overview of the Bachelor of Economics program, including subjects and career options. 🔗 <a href="https://www.hindustantimes.com" target="_blank" className="text-blue-600 underline">Hindustan Times</a></li>
              <li>Career Opportunities: Understand the various roles available for economics graduates, such as Economist and Financial Analyst. 🔗 <a href="https://www.indeed.co.in" target="_blank" className="text-blue-600 underline">Indeed India</a></li>
            </ul>
          </div>

          {/* Investment Banking */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Investment Banking</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Career Path: Explore the steps to build a career in investment banking, including necessary qualifications and skills. 🔗 <a href="https://www.careers360.com" target="_blank" className="text-blue-600 underline">Careers360</a></li>
              <li>Salary Expectations: Understand the earning potential in the investment banking sector. 🔗 <a href="https://www.unstop.com" target="_blank" className="text-blue-600 underline">Unstop</a></li>
            </ul>
          </div>

          {/* Financial Planning and Analysis */}
          <div>
            <h3 className="font-semibold text-lg">Financial Planning and Analysis</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Role Overview: Insights into the responsibilities of financial planners and analysts in various industries. 🔗 <a href="https://www.indeed.co.in" target="_blank" className="text-blue-600 underline">Indeed India</a></li>
              <li>Certification Details: Information on certifications like Certified Financial Planner (CFP) and their relevance. 🔗 <a href="https://www.unstop.com" target="_blank" className="text-blue-600 underline">Unstop</a></li>
            </ul>
          </div>
        </div>
       {/* ARTS STREAM */}
       <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-7xl font-bold text-gray-800">ARTS <span className="text-blue-600">STREAM</span></h2>
          <p className="text-gray-600 mt-2 mb-8">
            Here you'll find free articles and resources for Arts students. Discover materials for Psychology, History, Literature, Sociology, Law, and more to support your learning and future path.
          </p>

          {/* Bachelor of Arts (BA) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Arts (BA)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Course Overview: Explore various specializations in BA, including History, Political Science, Sociology, and more. 🔗 <a href="https://www.greatlearning.in" target="_blank" className="text-blue-600 underline">Great Learning - Career Options After 12th Arts</a></li>
              <li>Career Opportunities: Understand the diverse career paths available after pursuing a BA degree. 🔗 <a href="https://www.lpu.in" target="_blank" className="text-blue-600 underline">LPU Blog - Top Courses After 12th for Arts Students</a></li>
            </ul>
          </div>

          {/* Bachelor of Fine Arts (BFA) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Fine Arts (BFA)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Program Insights: Learn about the BFA program and its scope in fields like advertising, graphic design, and digital media. 🔗 <a href="https://www.emeritus.org" target="_blank" className="text-blue-600 underline">Emeritus - Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Bachelor of Design (B.Des) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Design (B.Des)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Design Specializations: Discover various design specializations such as fashion design, interior design, and graphic design. 🔗 <a href="https://www.cpjcollege.in" target="_blank" className="text-blue-600 underline">CPJ College - Courses and Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Bachelor of Hotel Management (BHM) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Bachelor of Hotel Management (BHM)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Hospitality Industry: Explore the BHM program and career opportunities in the hospitality sector. 🔗 <a href="https://www.greatlearning.in" target="_blank" className="text-blue-600 underline">Great Learning - Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Journalism and Mass Communication */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Journalism and Mass Communication</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Media Careers: Understand the scope of careers in journalism, public relations, advertising, and digital marketing. 🔗 <a href="https://www.ndtv.com" target="_blank" className="text-blue-600 underline">NDTV - Career Options for Arts Students After Class 12</a></li>
            </ul>
          </div>

          {/* Law (BA LLB) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Law (BA LLB)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Legal Education: Learn about integrated law courses and the path to becoming a legal professional. 🔗 <a href="https://www.upgrad.com" target="_blank" className="text-blue-600 underline">UpGrad - Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Fashion Designing */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Fashion Designing</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Creative Fields: Explore career opportunities in fashion designing and the skills required for success. 🔗 <a href="https://www.ndtv.com" target="_blank" className="text-blue-600 underline">NDTV - Career Options for Arts Students After Class 12</a></li>
            </ul>
          </div>

          {/* Psychology */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Psychology</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Understanding Human Behavior: Delve into the study of psychology and potential career paths in counseling and therapy. 🔗 <a href="https://www.greatlearning.in" target="_blank" className="text-blue-600 underline">Great Learning - Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Event Management */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Event Management</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Organizing Events: Learn about courses in event management and careers as event planners and coordinators. 🔗 <a href="https://www.greatlearning.in" target="_blank" className="text-blue-600 underline">Great Learning - Career Options After 12th Arts</a></li>
            </ul>
          </div>

          {/* Education (B.Ed) */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Education (B.Ed)</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              <li>Teaching Profession: Understand the pathway to becoming a teacher through Bachelor of Education programs. 🔗 <a href="https://www.cpjcollege.in" target="_blank" className="text-blue-600 underline">CPJ College - Courses and Career Options After 12th Arts</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesAndArt;
