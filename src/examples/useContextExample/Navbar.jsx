import { useContext } from "react"
import { ThemContext } from "../../context/ThemContext"

const Navbar = () => {

  const { darkMode } = useContext(ThemContext)

  const style = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    padding: '10px',
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <h2>Navbar</h2>
    </div>
  )
}

export default Navbar