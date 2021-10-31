import TopBar from './components/topbar';
import Btn from './components/btn.js'
import BadgeBanner from './components/badge-scr-banner';
import BadgeCompanies from './components/badge-scr-companies';
import VideoPlay from './components/video.js';

function App() {
  return (
    <div className="App">

     <TopBar/>
      <div className="badge-container">
        <div className={`container`}>
        
          <BadgeBanner />
          <BadgeCompanies />
        </div>
        <VideoPlay />
        <Btn />
      </div>   
    </div>
  );
}

export default App;
