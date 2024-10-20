import React from 'react'
import useLanguage from '../context/language'
function Paragraph() {
    const {content} =useLanguage()
  return (
    <div>
       <p>{content.paragraph}</p>
    </div>
  )
}

export default Paragraph
