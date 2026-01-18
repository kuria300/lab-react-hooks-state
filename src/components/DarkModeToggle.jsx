import {light, dark} from '../styles/DarkMode.module.css'

const DarkModeToggle = ({mode, setMode}) => {
  // TODO: Implement dark mode toggle logic

  const toggleMode =()=> setMode(prevState=> !prevState)
  return (
   <>
   <button className={mode ? light: dark} onClick={toggleMode}>
      {mode ? 'light' : 'dark'} toggle
     </button>
    {/* {mode ? (
     <button className={light} onClick={toggleMode}>
       Toggle Dark Mode
     </button>
   ) : (
    <button className={dark} onClick={toggleMode}>
     Toggle Dark Mode
    </button>
   )} */}
   </>
  )
}

export default DarkModeToggle
