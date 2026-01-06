import AdminLayout from "../../layouts/AdminLayout"
import DisciplinaItem from "../../components/getComponents/DisciplinaItem"
import Add from "../../components/Add"
import { useState,useEffect } from "react"

export default function Disciplinas() {
  const [loading, setLoading ]= useState(true)
  const [error, setError] = useState()
  const [data, setData] = useState([])
    
  const url = 'http://localhost:3002/api/disciplinas'
    
  useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.data || []))
      .catch((error)=>{
          setError(error)
      })
      .finally(()=>{setLoading(false)})
  },[])

  return(
      <AdminLayout>
        {/*Renderizacion de contenido de tablas*/}
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          

          {data.map(item => (
            <DisciplinaItem nombre={item.nombre} codigo={item.codigo} id={item.id} key={item.id}/>
          ))}

        </div>
          <Add/>
      </AdminLayout>
  )
}