import "../../App.css"
import Photo from "../../assets/img/img.jpg"
import { useState , useContext } from "react"
import MainCount from ".."
import { useNavigate } from "react-router-dom"
import myContext from "../../context/mycontext"


const Entrance = ()=>{
    let Navigate = useNavigate();
    const {fields , setFields} = useContext(myContext)
    
    
    

    const contar = ()=>{
        let dateToday = new Date()
        let year = dateToday.getFullYear();
        let day = dateToday.getDate();
        let month = dateToday.getMonth()+1 
        if(fields.date.length == 0 ){
            alert("data para contagem precisa ser preenchida")
        }else if(new Date(fields.date).getTime() <= new Date(year+"-"+month+"-"+day).getTime()){
            alert("a data nao pode ser menor que o dia atual")
        }else{
            Navigate("/count")
        }
    }

    const handleChange=(e)=>setFields({
        ...fields,
        [e.currentTarget.name]:e.currentTarget.value
    })

    /*const handleChange1=(e)=>setTit(e.target.value)
    const handlechangeImg=(e)=>setImg(e.target.value)*/
    
    

    return(
        <div className="App" style={{backgroundImage: `url(${Photo})`}}>
            <div className='container'>
                <div className="inputs">
                    <div className="inp">
                        <label>Data Para Contagem</label>
                        <input type="date" name="date" onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="inp">
                        <label>Nome do evento</label>
                        <input type="text" name="name" onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="inp">
                        <label>Imagem de fundo</label>
                        <input type="text" name="img" placeholder="url" onChange={(e)=>handleChange(e)}/>
                    </div>
                    <button onClick={()=>{contar()}}>Contar!</button>
                </div>    
            </div> 
        </div>
    )
}

export default Entrance