import { useState } from 'react'
import { LanguageProvider } from './context/language'
import LanguageSelector from './components/languageSelector'
import Paragraph from './components/Paragraph'

function App() {
  // Initialize language state
  const [language, setLanguage] = useState('eng')
  const englang = () =>{
    setLanguage("eng");
  }
  const neplang= () =>{
    setLanguage("nep");
  }

  const content = {
    eng: {
        paragraph: 'This is a paragraph in English.',
    },
    nep: {
        paragraph: 'यो नेपालीमा अनुच्छेद हो।',
    },
};

  
  return (
    <LanguageProvider value={{ language, content:language === 'eng' ? content.eng : content.nep,englang, neplang, setLanguage }}>
      <h1>Language Switcher Example</h1>
      <LanguageSelector />
      <Paragraph />

    </LanguageProvider>
  )
}

export default App
