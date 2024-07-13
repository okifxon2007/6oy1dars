import './App.css'
import logo from "../public/img/Logo.svg";
import buttons from "../public/img/Buttons.svg";
import Group from "../public/img/Group 592 1.svg";
import cta from "../public/img/CTA.svg";
import partner from "../public/img/partner.svg";

import bromo from "../public/img/scren.jpg";




function App() {

  return (
     <div className="conta">
     <div className="header">
      <img src={logo} className='logo' alt="" />
      <input type="text" placeholder='Cari apapun disini...' />
      <select>
        <option className='option'>Bahasa indonesia</option>
      
      </select>
      <select className='select2'>
      <option className='option2'>Indonesia, Yogyakarta</option>
      </select>
     </div>
     <div className="main">
      <select>
        <option>Gunung</option>
      </select>
      <select>
        <option>Pantai</option>
      </select>
      <select>
        <option>Kuliner</option>
      </select>
      <select>
        <option>Outbond</option>
      </select>
      <select>
        <option>Sejarah</option>
      </select>
      <select>
        <option>Edukasi</option>
      </select>
      <select>
        <option>Romantis</option>
      </select>
      <select>
        <option>Alam</option>
      </select>
      <img src={buttons} alt="" />
     </div>
     <div className="main2">
      <div className="onepage">
        <button>✈️ • Explore the wonderful indonesia!</button>
        <h1>Liburan & nikmati
<span>tempat baru</span> di
indonesia  ️🏝</h1>
<p>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
<img src={cta} alt="" />

      </div>
      <div className="twopage">
        <img src={Group} alt="" />
      </div>
     </div>
     <div className="main3">
      <img src={partner} alt="" />
     </div>
     <div className="main4">
      <h3>DESTINASI FAVORIT</h3>
      <h1>✈️• Temukan Destinasi Favoritmu  </h1>
      <div className="maind4df">
        <img src={bromo} alt="" />
      </div>
     </div>
     </div>
  )
}

export default App
