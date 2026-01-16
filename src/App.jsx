import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('');
  const [showText, setShowText] = useState('');
  const [placeholderChange, setPlaceholder] = useState('Введіть текст');

  const handelClick = () => {
    setShowText(text);
    setText('');
    setPlaceholder('Введіть текст');
  }

  const handelChange = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button text="натисни мене" onClick = {handelClick} />
      <Input placeholder= {placeholderChange} value={text} onChange = {handelChange} />
      {showText && <p>Ви ввели: <strong>{showText}</strong></p>}
    </>
  )
}

export default App
