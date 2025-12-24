import React from 'react'
import './Result.css'
import subjects_data from './subjects.json'
function Results({ result ,reset}) {
    result  = { Index: "9204776",Name: "Prasannah", NIC: "2005123456789", Examination: "Ol", Year: "2025", result:{'Mathematics':"A", 'Science':"A", 'English':"A", 'Tamil Language':"A", 'Religion':"A", 'History':"A", 'Bascket 1':"A", 'Bascket 2':"A", 'Bascket 3':"A"}}
      
    const titles = ['Examination', 'Year', 'Index', 'Name','NIC']
    const subjects = subjects_data[result.Examination]
    // const subjects = ['Mathematics', 'Science', 'English Language', 'Tamil Language', 'Religion', 'History', 'Bascket 1', 'Bascket 2', 'Bascket 3']

    console.log(subjects);
    
    return (
        <div className='results_body'>
            
            <div className="result_contents-div">
{titles.map((title) => {
                return (
                    <p key={title} className="result_contents">
  <span>{title}</span>
  <span>:</span>
  <span>{result[title]}</span>
</p>

                )

            })}
            </div>
            
            <table className="result-table">
                    <tbody>
                        <tr>
                            <td className="subject-name-head">Subjects</td>
                            <td className="subject-mark-head">Results</td>

                        </tr>
                        {subjects.map((subject) => (
                            <tr key={subject}>
                            
                                <td>
                                    <p className="subject-name">{subject}</p>
                                </td>
                                <td className="subject-mark">
                                    {result.result[subject]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            

        <button className='reset-btn' onClick={() => reset()}>Close</button>
        </div>
    )
}

export default Results