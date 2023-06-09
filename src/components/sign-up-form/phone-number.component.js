// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Example() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [number, setNumber] = useState("")
  const changeNumber = number => {
    setNumber(number)
  }
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={number}
      onChange={changeNumber}/>
  )
}

export default Example;