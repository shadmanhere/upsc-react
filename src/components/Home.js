import React from "react";

function Home() {
  return (
    <React.Fragment>
      <h1 className="text-center mt-4">UPSC Syllabus</h1>
      <div className="container">
        <p>UPSC Civil Services Examination has 3 stages</p>
        <ul>
          <li>Preliminary Stage – General Studies & CSAT</li>
          <li>
            Mains Stage – 9 Theory Papers (GS I-IV, Language Papers, Essay &
            Optional)
          </li>
          <li>Personality Test – Interview</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Home;
