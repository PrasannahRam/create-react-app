import Home from './component/Home' 
import Header from './component/Header';
import './App.css';
import Results_page from './component/Results_page';

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <Header></Header> */}
      <div className = "App-body">
        <h2 style={{color : '#383636',padding:'10px'}}>FIND YOUR EXAM RESULTS HERE </h2>

        <button className = "App-notice">
        <p>Disclaimer</p>
        </button>
        <div className='result_page'>
          <Results_page></Results_page>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
