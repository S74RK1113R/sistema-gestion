import AdminLayout from "../../layouts/AdminLayout"
import UsuariosItem from "../../components/getComponents/UsuariosItem"
import { useEffect, useState } from "react"
import Add from "../../components/Add"

export default function Usuarios() {
    const [loading, setLoading ]= useState(true)
    const [error, setError] = useState()
    const [data, setData] = useState([])
        
    const url = 'http://localhost:3002/api/usuarios'
        
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

            {data.map(item => (
                <UsuariosItem id={item.id} nombres={item.nombres} primer_apellido={item.primer_apellido} segundo_apellido={item.segundo_apellido} usuario={item.usuario} key={item.id}/>
            ))}

          <Add />
        </AdminLayout>
    )
}