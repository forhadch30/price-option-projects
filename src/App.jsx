import DayNav from "./components/DayNav/DayNav"
import NavBar from "./components/DayNav/NavBar/NavBar"
import LineChart from "./components/LineChart/LineChart"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {
  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
      {/* <DayNav></DayNav> */}
      {/* <h1 className="text-4xl font-bold">Vite + React</h1> */}
    </>
  )
}

export default App
