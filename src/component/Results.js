import React from 'react'
import './Result.css'
function Results({result}) {
    const titles = ['nic','indexno','exam','year']
    const subjects = ['science','maths','english']
   
  return (
    <div className='results_body'>
        {console.log(result)
        }
        
        {titles.map((title)=>{
            return(
            <p key={title}>
                {console.log(result[title])}
                
                {title} ={result[title]}
            </p>
            )
            
        })}
        {subjects.map((subject)=>{
            return(
                <p>{subject} : {result.result[subject]}</p>
            )
        })}
        
     
    </div>
  )
}

export default Results