import React, {useState} from 'react';
import FacebookIcon from "./images/icon-facebook.svg";
import InstagramIcon from "./images/icon-instagram.svg";
import TwitterIcon from "./images/icon-twitter.svg";
import YoutubeIcon from "./images/icon-youtube.svg";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Modal from "./components/Modal";
import Header from "./components/Header";


function App () {

  const modalRef = React.useRef();

  function OpenModal(object){
    modalRef.current.openModal(object);
  }

  const [darkMode, setDarkMode] = useState(false);


  if(darkMode){
    document.body.classList.remove("light-bg");
    document.body.classList.add("black-bg");
  }  
  else{
    document.body.classList.remove("black-bg");
    document.body.classList.add("light-bg");
  }
 
  return (
    <div className= { darkMode? "dark-mode app" : "light-mode app"}>
          <Modal ref= {modalRef}/>
          <Header darkMode={darkMode}
                  setDarkMode={setDarkMode}
          />
          <Dashboard 
            OpenModal = {OpenModal}
            FacebookIcon= {FacebookIcon}
            TwitterIcon= {TwitterIcon}
            YoutubeIcon= {YoutubeIcon}
            InstagramIcon= {InstagramIcon}
          />
          <Overview
            FacebookIcon= {FacebookIcon}
            TwitterIcon= {TwitterIcon}
            YoutubeIcon= {YoutubeIcon}
            InstagramIcon= {InstagramIcon}
          />
      </div>
  );
}

export default App;




