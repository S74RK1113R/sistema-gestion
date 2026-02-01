import AdminLayout from "../../layouts/AdminLayout"
import Add from "../../components/Add"
import { useState,useEffect } from "react"
import { tableUse } from "../../context/TablesContext"
import CursoItem from "../../components/getComponents/CursoItem"
import CursoForm from "../../components/addForms/CursoForm"

export default function Curso() {

  const [loading, setLoading ]= useState(true)
  const [error, setError] = useState()
  const {curso, setCurso,del, insert}= tableUse()
    
  const url = 'http://localhost:3002/api/cursos'
    
  useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((json) => setCurso(json.data || []))
      .catch((error)=>{
          setError(error)
      })
      .finally(()=>{setLoading(false)})
  },[del,insert])

  return(
      <AdminLayout>
        {/*Renderizacion de contenido de tablas*/}
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          
          {curso.map(item => (
            <CursoItem curso={item.curso} id={item.id} key={item.id}/>
          ))}

        </div>
          <Add formTitle={"Insertar curso"}>
            <CursoForm/>
          </Add>
      </AdminLayout>
  )
}