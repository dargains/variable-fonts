import { useState } from 'react';
import Range from './components/Range';
import './App.css';

function App() {
  const [size, setSize] = useState(48)
  const [weight, setWeight] = useState(400)
  const [width, setWidth] = useState(55)
  const [slant, setSlant] = useState(0)
  const [grade, setGrade] = useState(88)
  const [optical, setOptical] = useState(64)
  const [lineHeight, setLineHeight] = useState(48)
  const [xtra, setXtra] = useState(400)
  const [text, setText] = useState("Lorem Ipsum")
  const [font, setFont] = useState("Roboto Flex")

  const settings = [
    {
      label: 'size',
      min: 8,
      max: 160,
      step: 1,
      initialValue: size,
      handleChange: setSize
    },
    {
      label: 'weight',
      min: 100,
      max: 900,
      step: 10,
      initialValue: weight,
      handleChange: setWeight
    },
    {
      label: 'slant',
      min: 0,
      max: 10,
      step: 1,
      initialValue: -1 * slant,
      handleChange: value => setSlant(-1 * parseInt(value))
    },
    {
      label: 'grade',
      min: -300,
      max: 500,
      step: 1,
      initialValue: grade,
      handleChange: setGrade
    },
    {
      label: 'width',
      min: 25,
      max: 150,
      step: 1,
      initialValue: width,
      handleChange: setWidth
    },
    {
      label: 'optical size',
      min: 8,
      max: 144,
      step: 1,
      initialValue: optical,
      handleChange: setOptical
    },
    {
      label: 'line height',
      min: 1,
      max: 160,
      step: 1,
      initialValue: lineHeight,
      handleChange: setLineHeight
    },
    {
      label: 'XTRA',
      min: 300,
      max: 600,
      step: 10,
      initialValue: xtra,
      handleChange: setXtra
    },
  ]

  return (
    <div className="mainContainer">
      <fieldset className="inputsContainer">
        {
          settings.map(setting => <Range key={setting.label} {...setting} />)
        }
        <div className="input">
          <label htmlFor="text">Text</label>
          <input
            className="input__text"
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="fonts">
          <div>
            <input type="radio" id="Roboto Flex" name="font" value="Roboto Flex"
              checked={font === "Roboto Flex"} onChange={e => setFont(e.target.value)} />
            <label htmlFor="Roboto Flex">Roboto Flex</label>
          </div>
          <div>
            <input type="radio" id="Inter Variable" name="font" value="Inter Variable" checked={font === "Inter Variable"} onChange={e => setFont(e.target.value)} />
            <label htmlFor="Inter Variable">Inter Variable</label>
          </div>
          <div>
            <input type="radio" id="Graduate" name="font" value="Graduate" checked={font === "Graduate"} onChange={e => setFont(e.target.value)} />
            <label htmlFor="Graduate">Graduate</label>
          </div>
          <div>
            <input type="radio" id="Alvarado" name="font" value="Alvarado" checked={font === "Alvarado"} onChange={e => setFont(e.target.value)} />
            <label htmlFor="Alvarado">Alvarado</label>
          </div>
          <div>
            <input type="radio" id="Amstelvar" name="font" value="Amstelvar" checked={font === "Amstelvar"} onChange={e => setFont(e.target.value)} />
            <label htmlFor="Amstelvar">Amstelvar</label>
          </div>
        </div>
      </fieldset>
      <div className="resultContainer">
        <p className="result" style={
          {
            fontVariationSettings: `'wght' ${weight}, 'slnt' ${slant}, 'GRAD' ${grade}, 'wdth' ${width}, 'opsz' ${optical}, 'XTRA' ${xtra}`,
            fontSize: `${size}px`,
            lineHeight: `${lineHeight}px`,
            fontFamily: font
          }
        }>{text}</p>
      </div>
    </div>
  )
}

export default App;
