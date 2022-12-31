import '../App.css'
import Title from '../components/title'
import Info from '../components/info'
import Photo from "../assets/img/img.jpg"
import useCountdown from '../components/hook/useCountdown'
import myContext from '../context/mycontext'
import { useContext } from 'react'

const MainCount = (props)=>{
    const {fields , setFields} = useContext(myContext) 
    
    const [day , hour , minute , second] = useCountdown(`${fields.date} 00:00:00`)//'2022-12-31'
  return (
    <div className="App" style={{backgroundImage: `url(${fields.img.length == 0 ? Photo : fields.img })`}}>
      <div className='container'>
        <Title title={fields.name}/>
        <div className='info'>
          <Info number={day} title="dias"/>
          <Info number={hour} title="horas"/>
          <Info number={minute} title="minutos"/>
          <Info number={second} title="segundos"/>

        </div>
      </div> 
    </div>
  )
}

export default MainCount