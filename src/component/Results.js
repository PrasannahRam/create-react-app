import React from 'react'
import './Result.css'
import subjects_data from './subjects.json'
function Results({ result }) {
    const titles = ['Nic', 'Indexno', 'Exam', 'Year','Name']
    const subjects = subjects_data[result.Exam]
    // const subjects = ['Mathematics', 'Science', 'English Language', 'Tamil Language', 'Religion', 'History', 'Bascket 1', 'Bascket 2', 'Bascket 3']

    console.log(subjects);
    
    return (
        <div className='results_body'>
            

            {titles.map((title) => {
                return (
                    <p key={title} className='result_contents'>
                        {title}     :{result[title]}
                    </p>
                )

            })}
            <table className="result-table">
                    <tbody>
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

            



        </div>
    )
}

export default Results