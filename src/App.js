import './App.css';
import ResultsPage from './component/Results_page';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    
      
      <div className = "App-body">
        <Header></Header>


        <h2 style={{color : '#363638ff',padding:'10px', textAlign:'left', borderBottom:" 1px solid #d4d5d5ff"}}>View Examination Results </h2>

        <div className='result_page'>
          <ResultsPage></ResultsPage>
        </div>
        
      

      </div>
      
    </div>
  );
}

export default App;
