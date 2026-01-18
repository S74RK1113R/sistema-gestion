import AdminLayout from "../../layouts/AdminLayout"
import UsuariosItem from "../../components/getComponents/UsuariosItem"
import { useEffect, useState } from "react"
import Add from "../../components/Add"
import { tableUse } from "../../context/TablesContext"
import UsuariosForm from "../../components/addForms/UsuariosForm"

export default function Usuarios() {
    const [loading, setLoading ]= useState(true)
    const [error, setError] = useState()
    const {usuario,setUsuario,del} = tableUse()
        
    const url = 'http://localhost:3002/api/usuarios'
        
    useEffect(()=>{
      fetch(url)
      .then((response) => response.json())
      .then((json) => setUsuario(json.data || []))
      .catch((error)=>{
          setError(error)
      })
      .finally(()=>{setLoading(false)})
    },[del])

    return(
        <AdminLayout>
          {/*Renderizacion de contenido de tablas*/}

            {usuario.map(item => (
                <UsuariosItem id={item.id} nombres={item.nombres} primer_apellido={item.primer_apellido} segundo_apellido={item.segundo_apellido} usuario={item.usuario} key={item.id}/>
            ))}

          <Add formTitle={"Insertar usuarios"}>
            <UsuariosForm/>
          </Add>
        </AdminLayout>
    )
}