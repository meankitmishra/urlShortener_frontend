import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to Shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
      <div className ="info"> 
      <p> A Simple yet</p>
      </div>
      <div className = "info">
      <p><span>Powerful</span> tool for many</p>
      </div>
    </div>
  )
}

export default InputShortener