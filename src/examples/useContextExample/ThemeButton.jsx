import { useContext } from "react"
import { ThemContext } from "../../context/ThemContext"

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemContext)

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeButton