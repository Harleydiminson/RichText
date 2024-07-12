// Rich text app
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import './App.css';

const App = () => {
  const [text, setText] = useState('hello');
  const divRef = useRef(null);
  const applytag = (tag) => {
    if (text.includes(`<${tag}>`)) {
      setText(text.replace(`<${tag}>`, '').replace(`</${tag}>`, ''))
    }
    else { setText(`<${tag}>${text}</${tag}>`) }
  }

  const handleButtonClick = (command) => {
    switch (command) {
      case 'B':
      case 'I':
      case 'U':
        applytag(command.toLowerCase());
      default:
        break;
    }

  }
  useEffect(() => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(divRef.current);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    divRef.current.focus();
  }, [text]);

  return (
    <div className="App">
      <div className='buttons'>
        <Button onClick={handleButtonClick} label='B' />
        <Button onClick={handleButtonClick} label='I' className="italic" />
        <Button onClick={handleButtonClick} label='U' className="underline" />
      </div>
      <div className='display'
        contentEditable
        ref={divRef}
        onInput={(e) => setText(e.target.innerHTML)}
        dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    </div>
  );
}

export default App;
