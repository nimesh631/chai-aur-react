import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState("en");

  // useEffect to run side effects when the language changes
  useEffect(() => {
    console.log(`Language changed to: ${language}`);
    // You can add more side effects here, like analytics or data fetching
  }, [language]); // This will run every time the language changes

  const renderPara = () => {
    if (language === 'en') {
      return (
        <>
          <h1 className='font-extrabold py-3 underline text-xl'>Profile Summary</h1>
          <p>Currently pursuing a Bachelor of Science in Computer Science and Information Technology (BSc.CSIT) from Himalaya College of Engineering...</p>
        </>
      );
    } else if (language === 'np') {
      return (
        <>
          <h1 className='font-extrabold py-3 underline text-xl'>प्रोफाइल सारांश</h1>
          <p>हाल हिमालय कलेज अफ इन्जिनियरिङबाट कम्प्युटर विज्ञान र सूचना प्रविधि (BSc.CSIT) मा स्नातक अध्ययन गर्दैछु...</p>
        </>
      );
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '20px',
        }}>
        <img className='w-20 my-6' src="/pp.jpg" alt="" />

        <div className='text-black text-xl'>
          <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="np">Nepali</option>
          </select>
        </div>

        <div>
          {renderPara()}
        </div>
      </div>
    </>
  );
}

export default App;
