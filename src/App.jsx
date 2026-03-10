import ThemProvider from "./context/ThemContext"
import UserList from "./examples/customHookExample/UserList"
import ParentComponent from "./examples/useCallbackExample/ParentComponent"
import Navbar from "./examples/useContextExample/Navbar"
import ThemeButton from "./examples/useContextExample/ThemeButton"
import FectchApi from "./examples/useEffectExample/FectchApi"
import MeasureWidth from "./examples/useLayoutEffectExample/MeasureWidth"
import Timmer from "./examples/useEffectExample/Timmer"
import TitleUpdater from "./examples/useEffectExample/TitleUpdater"
import ExpensiveCalculation from "./examples/useMemoExample/ExpensiveCalculation"
import ProductSearch from "./examples/useMemoExample/ProductSearch"
import CounterReducer from "./examples/useReducerExample/CounterReducer"
import FormReducer from "./examples/useReducerExample/FormReducer"
import InputFocus from "./examples/useRefExample/InputFocus"
import PreviousValue from "./examples/useRefExample/PreviousValue"
import Stopwatch from "./examples/useRefExample/Stopwatch"
import Counter from "./examples/useStateExample/Counter"
import PreventFlicker from "./examples/useLayoutEffectExample/PreventFlicker"
import ResizableBox from "./examples/useLayoutEffectExample/ResizableBox"

const App = () => {
  return (
    <>
      <h1>React Hooks Practice</h1>
      <ResizableBox />
      <hr />
      <PreventFlicker />
      <hr />
      <MeasureWidth />
    </>
  )
}

export default App