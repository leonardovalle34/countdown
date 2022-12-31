import { BrowserRouter , Route , Routes } from "react-router-dom"
import MainCount from "./screens"
import Entrance from "./screens/entrance"

const RoutesIn = ()=>{
    return (
        <BrowserRouter>
            <Routes>
            
                <Route exact path="/" element={<Entrance/>}/>
                <Route exact path="/count" element={<MainCount/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesIn