import React from "react";
import "./Result.css";
// import subjects_data from "./subjects.json";
function Results({ result, reset }) {

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

                {console.log(result.result)}
          {result.result.map((subject)=>{
            return(
                
              <tr key={subject.subject}>
              <td>
                <p className="subject-name">{subject.subject}</p>
              </td>
              <td className="subject-mark">{subject.marks}</td>
            </tr>
            )
          })}
        
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
