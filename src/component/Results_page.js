import React, { useEffect, useRef, useState } from 'react'
import Results from './Results'
import './Result.css'
import data from './data.json' 

function Results_page() {
  const [year, setyear] = useState()
  const [exam, setexam] = useState()
  const [indexno, setindexno] = useState('')
  const [nic, setnic] = useState('')
  const [idtype, setidtype] = useState('indexno')
  const [show, setshow] = useState(false)
  const [valid_index, setvalid_index] = useState(true)
  const [result_info, setresult_info] = useState('')

  const res_ref = useRef(null)

  useEffect(() => {
    res_ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [show]);

//   useEffect(() => {
//   if (show && res_ref.current) {
//     window.scrollTo({
//       top: res_ref.current.offsetTop - 50,  // scroll a bit above the result
//       behavior: 'smooth',
//     });
//   }
// }, [show]);



  // const subjects = subjects_data[exam]
  // console.log(subjects);
   useEffect(() => {
      const timer = setTimeout(() => {
        setvalid_index(true)
      }, 2000);
      return () => clearTimeout(timer);
    }, [valid_index]);

  const setdisable = (elem)=>{
    if (elem === '' | elem === null|elem === undefined |elem === 'Select Exam'|elem === 'Select Year'){
      return  true
    } else {
      return false
    }
  }


  const clear = () => {
    setexam('Select Exam')
    setyear('')
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

    if (id == 9204776 ||id ===  '200500201250'){
      setresult_info({ Indexno: "9204776",Name: "Prasannah", Nic: "2005123456789", Exam: exam, Year: year, result:{'Mathematics':"A", 'Science':"A", 'English':"A", 'Tamil Language':"A", 'Religion':"A", 'History':"A", 'Bascket 1':"A", 'Bascket 2':"A", 'Bascket 3':"A"} })
      setshow(true)
      return
    }
    else{
      setvalid_index(false)
    }
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
    
    
    if (result['message'] === 'No result found' || result['error']) {
      setvalid_index(false)
      setindexno('')
      setnic('')
    }else{
      setshow(true)
    }

    // {id: 1, nic: '200500201250', name: 'Prasannah', Results: {…}, indexno: '9204776'}
    info = { Indexno: result['indexno'],Name: result['name'], Nic: result['nic'], Exam: exam, Year: year, result: result['Results'] }
    setresult_info(info)
    console.log('result:',result);
    console.log(info.Exam);
    
    
    
    
    } catch (error) {
      console.log(error);
      setshow(false)
      
    }
    
    // setshow(true)

    // const info = { Indexno: indexno, Nic: nic, Exam: exam, Year: year, result: result }
  }

  return (
    <div>
    {show? 
    
    <div id="result" ref={res_ref} className="result-container">
          <Results result={result_info} reset={clear}/>
    </div> :
      
    <div className="form-container">

        <div className="row">
          <select
            value={exam}
            onChange={(e) => setexam(e.target.value)}
            className="select-box"
          >
            <option defaultChecked>Select Exam</option>
            {Object.keys(data).map((e) => (
              <option value={e} key={e}>{e}</option>
            ))}
          </select>

          <select
            value={year}
            disabled={setdisable(exam)}
            onChange={(e) => setyear(e.target.value)}
            className="select-box"
          >
            <option defaultChecked>Select Year</option>
            {exam !== 'Select Exam' & exam !== undefined &&
              data[exam].map((y) => (
                <option value={y} key={y}>{y}</option>
              ))}
          </select>
        </div>

        <p className="row">
          <select
            value={idtype}
            disabled={setdisable(year)}
            onChange={(e) => setidtype(e.target.value)}
            className="id-type"
          >
            <option value="indexno">Index</option>
            <option value="nic">NIC</option>
          </select>

          {idtype === 'indexno' ? (
            <input
              type="text"
              disabled={setdisable(year)}
              placeholder="Index No"
              value={indexno}
              onChange={(e) => setindexno(e.target.value)}
              className="input-box"
            />
          ) : (
            <input
              type="text"
              disabled={setdisable(year)}
              placeholder="NIC"
              value={nic}
              onChange={(e) => setnic(e.target.value)}
              className="input-box"
            />
          )}
        </p>

        {!valid_index && (
          <p className="invalid_index_pop">{idtype} not found</p>
        )}

        <div className="button-group">
          <button
            onClick={show_results}
            disabled={setdisable(year) || setdisable(exam)}
            className="btn submit-btn"
          >
            View Result
          </button>
          <button
            onClick={clear}
            className="btn reset-btn"
          >
            Reset
          </button>
        </div>
      </div>}
      

      
    </div>

  )
}



export default Results_page