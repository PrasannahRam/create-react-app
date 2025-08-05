import React from 'react'
import './Result.css'
function Results({ result }) {
    const titles = ['Nic', 'Indexno', 'Exam', 'Year']
    const subjects = ['Science', 'Maths', 'English']

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