import React,{useState} from 'react'

function Results() {
    const [year, setyear] = useState(0)
    const [exam, setexam] = useState('')
    const [indexno, setindexno] = useState('')
    const [nic, setnic] = useState()
    const [idtype, setidtype] = useState('indexno')

    const clear =()=>{
      setexam('')
      setindexno('')
      setnic('')
      setyear('')
    }


  return (
    <div>
      <div>
        <select value={exam} onChange={(e) => setexam(e.target.value)} style={{width:200,padding:'10px',margin:'10px'}}>
            <option value= "O/L">O/L</option>
            <option value= "A/L">A/L</option>
        </select>
        <select value={year} onChange={(e) => setyear(e.target.value)} style={{width:300,padding:'10px',margin:'10px'}}>
            <option value= '2023'>2023</option>
            <option value= "2024">2024</option>
        </select>
        <select value={idtype} onChange={(e) => setidtype(e.target.value)} style={{width:100,padding:'10px',margin:'10px',marginRight:0}}>
            <option value= 'indexno'>Index</option>
            <option value= "nic">NIC</option>
        </select>
        {idtype === 'indexno'? 
        <input type='text' placeholder='Index No'  value={indexno} onChange={(e)=>{setindexno(e.target.value)}} style={{width:500,padding:'10px',margin:'10px',marginLeft:0}}/> : 
        <input type='text' placeholder='NIC' value={nic} onChange={(e)=>{setnic(e.target.value)}} style={{width:500,padding:'10px',margin:'10px',marginLeft:0}}/>  }
        
    </div>
    <div>
          <button>Submit</button>
          <button onClick={clear}>Reset</button>
    </div>
  </div>

  )
}

const details = {
  padding : '10px',
  width : '33%'
}

export default Results