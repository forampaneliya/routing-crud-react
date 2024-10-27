import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Showhome from "./pages/Showhome"
import Updateform from "./pages/Updateform"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/showhome" element={<Showhome/>}/>
      <Route path="/updateform/:index" element={<Updateform/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
