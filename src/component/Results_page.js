import React,{useState} from 'react'
import Results from './Results'

function Results_page() {
    const [year, setyear] = useState(2023)
    const [exam, setexam] = useState('O/L')
    const [indexno, setindexno] = useState('')
    const [nic, setnic] = useState()
    const [idtype, setidtype] = useState('indexno')
    const [show, setshow] = useState(false)

    const [result_info, setresult_info] = useState('')

    const clear =()=>{
      setexam('')
      setindexno('')
      setnic('')
      setyear('')
      setshow(false)
    }

    const show_results= ()=>{
      // if (idtype === 'nic') {
      //   setindexno(null)
      // } else {
      //   setnic(null)
      // }


      // for testing
      const result = {science:"A",maths:"A",english:"A"}
      // for testing
      
      const info = {indexno:indexno ,nic:nic ,exam:exam ,year:year,result:result}
      setresult_info(info)
      setshow(true)
      console.log(result_info);
    }

  return (
    <div>
      <div>
        
        <select defaultValue={'ol'} value={exam} onChange={(e) => setexam(e.target.value)} style={{width:200,padding:'10px',margin:'10px',borderRadius:'5px'}}>
            <option value= "O/L">O/L</option>
            <option value= "A/L">A/L</option>
        </select>
        <select defaultValue={2023} value={year} onChange={(e) => setyear(e.target.value)} style={{width:300,padding:'10px',margin:'10px',borderRadius:'5px'}}>
            <option value= '2023'>2023</option>
            <option value= "2024">2024</option>
        </select>
        <p style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <select value={idtype} onChange={(e) => setidtype(e.target.value)} style={{width:100,padding:'10px',margin:'10px',marginRight:-1,borderRadius:'5px'}}>
            <option value= 'indexno'>Index</option>
            <option value= "nic">NIC</option>
        </select>
        
        {idtype === 'indexno'? 
        <input type='text' placeholder='Index No'  value={indexno} onChange={(e)=>{setindexno(e.target.value)}} style={{flex:1,width:'80%',borderRadius:'5px',maxWidth:'200px',padding:'10px',margin:'10px',marginLeft:0}}/> : 
        <input type='text' placeholder='NIC' value={nic} onChange={(e)=>{setnic(e.target.value)}} style={{flex:1,width:'80%',padding:'5px',borderRadius:'5px',margin:'10px',maxWidth:'200px',marginLeft:0}}/>  }
        
        </p>
        
    </div>
    <div>
          <button onClick={()=>show_results()}>Submit</button>
          <button onClick={clear}>Reset</button>
    </div>
    
    {show && 
    <div style={{justifyContent:'center'}}>
      <Results result={result_info}></Results>
      </div>
    
    }


  </div>

  )
}

const details = {
  padding : '10px',
  width : '33%'
}

export default Results_page