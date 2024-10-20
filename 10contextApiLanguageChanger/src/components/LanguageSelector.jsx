import React, { useContext } from 'react'
import useLanguage from '../context/language'

function LanguageSelector() {

  const {language,englang,neplang} = useLanguage();


  return (
    <>
      <div>
    <p>Current Language:{language === 'eng' ? 'English' : 'Nepali'}</p>
    </div>

    <div>
  <button onClick={englang}> Switch to English</button>
    </div>
  
  <div>
    <button onClick={neplang}> Switch to Nepali</button>
  </div></>
  
  )
}

export default LanguageSelector
