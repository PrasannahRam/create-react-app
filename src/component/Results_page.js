import React, { useState } from 'react'
import Results from './Results'
import './Result.css'
import data from './data.json' 
import subjects_data from './subjects.json'

function Results_page() {
  const [year, setyear] = useState()
  const [exam, setexam] = useState()
  const [indexno, setindexno] = useState('')
  const [nic, setnic] = useState('')
  const [idtype, setidtype] = useState('indexno')
  const [show, setshow] = useState(false)

  const [result_info, setresult_info] = useState('')


  // const subjects = subjects_data[exam]
  // console.log(subjects);
    

  const clear = () => {
    setexam()
    setindexno('')
    setnic('')
    setshow(false)
  }

  const show_results = async () => {
    var id 
    var info
    if (idtype === 'nic') {
      id = nic
    } else {
      id = indexno
    }
    var result = {}
    try {
      console.log('running');
      
      const res = await fetch("https://backend-ceu-results-production.up.railway.app/api/result",{
        method:'POST',
        body:JSON.stringify({id:id,idtype:idtype,exam:exam,year:year}),
        headers: {
        "Content-Type": "application/json"
      }
      
      
      }
    )
    console.log('succese');
    result = await res.json()
    console.log(result['nic']);
    
    // {id: 1, nic: '200500201250', name: 'Prasannah', Results: {…}, indexno: '9204776'}
    info = { Indexno: result['indexno'],Name: result['name'], Nic: result['nic'], Exam: exam, Year: year, result: result['Results'] }
    setresult_info(info)
    console.log(info);
    console.log(info.Exam);
    
    
    if (result !== undefined) {
      setshow(true)
    }
    
    } catch (error) {
      console.log(error);
      
    }
    
    // const info = { Indexno: indexno, Nic: nic, Exam: exam, Year: year, result: result }
    // for testing
    
    // for testing

    
    
    
  }

  return (
    <div>
      <div>

        <select  value={exam} onChange={(e) => setexam(e.target.value)} style={{ width: '40%',maxWidth:'250px', padding: '10px', margin: '10px', borderRadius: '5px' }}>
          <option defaultChecked>Select Exam</option>
          {Object.keys(data).map((e)=>{
            return(
              <option value={e} key={e}>{e}</option>
            )
            
          })}
        </select>
        <select value={year} onChange={(e) => setyear(e.target.value)} style={{ width: '40% ',maxWidth:'250px', padding: '10px', margin: '10px', borderRadius: '5px' }}>
          <option defaultChecked>Select Year</option>
          {exam!=null && data[exam].map((y)=>{
            return(
              <option value={y} key={y}>{y}</option>
            )
          })}
        </select>
        <p style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <select value={idtype} onChange={(e) => setidtype(e.target.value)} style={{ width: 100, padding: '10px', margin: '10px', marginRight: -1, borderRadius: '5px' }}>
            <option value='indexno'>Index</option>
            <option value="nic">NIC</option>
          </select>

          {idtype === 'indexno' ?
            <input type='text' placeholder='Index No' value={indexno} onChange={(e) => { setindexno(e.target.value) }} style={{ flex: 1, width: '80%', borderRadius: '5px', maxWidth: '200px', padding: '10px', margin: '10px', marginLeft: 0 }} /> :
            <input type='text' placeholder='NIC' value={nic} onChange={(e) => { setnic(e.target.value) }} style={{ flex: 1, width: '80%', padding: '5px', borderRadius: '5px', margin: '10px', maxWidth: '200px', marginLeft: 0 }} />}

        </p>

      </div>
      <div className="button-group">
        <button onClick={() => show_results()} className="btn submit-btn">Submit</button>
        <button onClick={clear} className="btn reset-btn">Reset</button>
      </div>


      {show &&
        <div style={{ justifyItems: 'center' }}>
          <Results result={result_info}></Results>
        </div>

      }


    </div>

  )
}

const details = {
  padding: '10px',
  width: '33%'
}

export default Results_page