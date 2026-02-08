import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import ResultadoEjerciciosIntegradoresItem from "../../components/getComponents/ResultadoDeEjerciciosIntegradoresItem";
import { tableUse } from "../../context/TablesContext";
import ResultadoEjerciciosIntegradoresForm from "../../components/addForms/ResultadoEjercicioIntegradoresForm";
import { useUser } from "../../context/UserContext";

export default function ResultadoEjerciciosIntegradores() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {resultadoEjercicios, setResultadoEjercicios,del, insert} = tableUse()
  const {isAdmin,isDirective} = useUser()
  const url = "http://localhost:3002/api/resultado_ejercicios_integradores";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setResultadoEjercicios(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ del , insert]);

  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Evaluación anterior/ Resultado ejercicios integradores
      </div>
      {/*Renderizacion de contenido de tablas*/}

      {resultadoEjercicios.map((item) => (
        <ResultadoEjerciciosIntegradoresItem
          año_evaluacion={item.año_evaluacion}
          id={item.id}
          porciento_aprobados={item.porciento_aprobados}
          porciento_con_4_5={item.porciento_con_4_5}
          key={item.id}
        />
      ))}

      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar resultado de ejercicios integradores"}>
          <ResultadoEjerciciosIntegradoresForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
