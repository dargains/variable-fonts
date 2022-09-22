import { useState } from "react"

export default Range = ({ initialValue, min, max, step, label, handleChange }) => {
  const [value, setValue] = useState(initialValue)
  return (
    <div className="input">
      <label htmlFor={label}>Font {label}: {value}</label>
      <input
        className="input__range"
        type="range"
        id={label}
        name={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => {
          const newValue = e.target.value
          setValue(newValue)
          handleChange(newValue)
        }
        } />
    </div>
  )
}