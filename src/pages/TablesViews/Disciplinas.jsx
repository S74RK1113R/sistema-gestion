import AdminLayout from "../../layouts/AdminLayout"
import DisciplinaItem from "../../components/getComponents/DisciplinaItem"
import Add from "../../components/Add"
import { useState,useEffect } from "react"
import { tableUse } from "../../context/TablesContext"

export default function Disciplinas() {

  const [loading, setLoading ]= useState(true)
  const [error, setError] = useState()
  const {disciplina, setDisciplina,del}= tableUse()
    
  const url = 'http://localhost:3002/api/disciplinas'
    
  useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((json) => setDisciplina(json.data || []))
      .catch((error)=>{
          setError(error)
      })
      .finally(()=>{setLoading(false)})
  },[del])

  return(
      <AdminLayout>
        {/*Renderizacion de contenido de tablas*/}
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          
          {disciplina.map(item => (
            <DisciplinaItem nombre={item.nombre} codigo={item.codigo} id={item.id} key={item.id}/>
          ))}

        </div>
          <Add formTitle={"Insertar disciplinas"}/>
      </AdminLayout>
  )
}