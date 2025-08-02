import Home from './component/Home' 
import Header from './component/Header';
import './App.css';
import Results from './component/Results';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class = "App-body">
        <h2 style={{color : '#383636',padding:'10px'}}>FIND YOUR EXAM RESULTS HERE </h2>

        <button class = "App-notice">
        <p>විභාග ප්‍රතිඵල ශ්‍රී ලංකා රජය සතු දේපලක් වන අතර, නිසි අවසරයකින් තොරව අයදුම්කරුගේ නොවන ප්‍රතිඵල උපුටා ගැනීම, ළඟ තබා ගැනීම, වෙබ් අඩවියක හෝ සමාජ මාධ්‍ය ජාලවල පල කිරීම හෝ වෙනත් ආකාරයකින් ප්‍රසිද්ධ කිරීම සපුරා තහනම් වන අතර, දඬුවම් ලැබිය හැකි වරදකි.

Examination results are the property of the Government of Sri Lanka, and copying, keeping, posting on a website or social media networks or otherwise publicizing the results which are not belong to the candidate without proper permission is strictly prohibited and is a punishable offence.

பரீட்சைப் பெறுபேறுகள் இலங்கை அரசாங்கத்தின் சொத்தாகும். உரிய அனுமதியின்றி பரீட்சார்த்திகளுக்கு உரியதல்லாத பெறுபேறுகளை பிரதிசெய்தல், தம்வசம் வைத்திருத்தல், இணையத்தளமொன்றிற்குள்ளோ அல்லது சமூக வலைத்தளங்களிலோ பதிவேற்றம் செய்தல் அல்லது வேறு வடிவங்களில் பிரசுரித்தல் என்பன முற்றாகத் தடைசெய்யப்பட்டுள்ளதுடன் தண்டனைக்குரிய குற்றமுமாகும்.</p>
        </button>
        <Results></Results>
      </div>
      
      <Home></Home>
      hi testing
    </div>
  );
}

export default App;
