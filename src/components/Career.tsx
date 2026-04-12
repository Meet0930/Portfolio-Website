import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Graduation <span>&</span>
          <br /> Certificate
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>LJ University</h4>
                <h5>Computer Engineering</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Currently pursuing Computer Engineering (6th Semester) with an SPI of 8.36. 
              Skilled in Python, web development, and automation technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coursera</h4>
                <h5>Certificate</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Introduction to Java- Coursera, 2024
              <br />
              Inheritance and Data Structures in Java- Coursera, 2024
              <br />
              Introduction to HTML, CSS, JavaScript- Coursera, 2025
              <br />
              Exploratory Data Analysis for Machine Learning- Coursera, 2025
              <br />
              Back-End Development with .NET- Coursera, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
