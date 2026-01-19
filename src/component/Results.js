import React from "react";
import "./Result.css";
// import subjects_data from "./subjects.json";
function Results({ result, reset }) {
  //   result = {
  //     Index: "9204776",
  //     Name: "Prasannah",
  //     NIC: "2005123456789",
  //     Examination: "Ol",
  //     Year: "2025",
  //     result: {
  //       Mathematics: "A",
  //       Science: "A",
  //       English: "C",
  //       "Tamil Language": "A",
  //       Religion: "A",
  //       History: "A",
  //       "Bascket 1": "A",
  //       "Bascket 2": "A",
  //       "Bascket 3": "A",
  //     },
  //   };

  const subjects = [
    "SAIVANERY",
    "TAMIL LANGUAGE & LITT",
    "ENGLISH LANGUAGE",
    "MATHEMATICS",
    "HISTORY",
    "SCIENCE",
    "ART",
    "DRAMA & THEATRE(TAMIL)",
    "APPR.OF TAMIL LIT.TEXT",
    "CIVIC EDUCATION",
    "GEOGRAPHY",
    "SECOND LANGUAGE(SINHALA)",
    "AGRI.& FOOD TECHNOLOGY",
    "HEALTH & PHYSICAL EDUCAT.",
    "INFOR.&COMM. TECHNOLOGY",
    "DESIGN &CONST. TECHNOLOGY",
  ];

  const titles = ["Examination", "Year", "Index", "Name"];

  return (
    <div className="results_body">
      <div className="result_contents-div">
        {titles.map((title) => {
          return (
            <p key={title} className="result_contents">
              <span>{title}</span>
              <span>:</span>
              <span>{result[title]}</span>
            </p>
          );
        })}
      </div>

      <table className="result-table">
        <tbody>
          <tr>
            <td className="subject-name-head">Subjects</td>
            <td className="subject-mark-head">Results</td>
          </tr>

          {result.result.map((subject)=>{
            return(
              <tr key={subject.name}>
              <td>
                <p className="subject-name">{subject.subject}</p>
              </td>
              <td className="subject-mark">{subject.marks}</td>
            </tr>
            )
          })}
        {/* {subjects.map(subject => (
  <tr key={subject}>
    <td>
      <p className="subject-name">{subject}</p>
    </td>
    <td className="subject-mark">{result.result[subject]}</td>
  </tr>
))} */}
          {/* {Object.entries(result.result).map(([subject, mark]) => (
            <tr key={subject}>
              <td>
                <p className="subject-name">{subject}</p>
              </td>
              <td className="subject-mark">{mark}</td>
            </tr>
          ))} */}
        </tbody>
      </table>

      {console.log("no problem")}
      <button className="reset-btn" onClick={() => reset()}>
        Close
      </button>
    </div>
  );
}

export default Results;
