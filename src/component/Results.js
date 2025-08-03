import React from 'react'

function Results({result}) {
   
  return (
    <div>
        {console.log(result)
        }
        nic = {result.nic}
        indexno = {result.indexno}
        exam ={result.exam}
        year = {result.year}
    </div>
  )
}

export default Results