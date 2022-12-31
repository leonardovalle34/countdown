import RoutesIn from "./routes"
import myContext from "./context/mycontext"
import { useState } from "react"
function App() {
  //const [tit , setTit] = useState("");
  const [fields , setFields] = useState({
    date:"",
    name:"",
    img:""
});
  
  return (
    <myContext.Provider value={{fields , setFields}}>
      <RoutesIn/>
    </myContext.Provider>
  )
}

export default App
