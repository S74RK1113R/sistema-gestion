import Input from "../Input";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";

export default function AyudantiaForm() {
  const { setAyudantia, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  const educacionSuperior1erAñoRef = useRef();
  const educacionSuperior2doAñoRef = useRef();
  const educacionSuperior3erAñoRef = useRef();
  const educacionSuperior4toAñoRef = useRef();
  const educacionSuperior5toAñoRef = useRef();

  const educacionMedia1erAñoRef = useRef();
  const educacionMedia2doAñoRef = useRef();
  const educacionMedia3erAñoRef = useRef();
  const educacionMedia4toAñoRef = useRef();
  const educacionMedia5toAñoRef = useRef();

  const añoEvaluacionRef = useRef();

  function erraseInput() {
    educacionSuperior1erAñoRef.current.value = "";
    educacionSuperior2doAñoRef.current.value = "";
    educacionSuperior3erAñoRef.current.value = "";
    educacionSuperior4toAñoRef.current.value = "";
    educacionSuperior5toAñoRef.current.value = "";

    educacionMedia1erAñoRef.current.value = "";
    educacionMedia2doAñoRef.current.value = "";
    educacionMedia3erAñoRef.current.value = "";
    educacionMedia4toAñoRef.current.value = "";
    educacionMedia5toAñoRef.current.value = "";

    añoEvaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const ayudantias = {
      educacion_superior_1er_año: educacionSuperior1erAñoRef.current.value,
      educacion_superior_2do_año: educacionSuperior2doAñoRef.current.value,
      educacion_superior_3er_año: educacionSuperior3erAñoRef.current.value,
      educacion_superior_4to_año: educacionSuperior4toAñoRef.current.value,
      educacion_superior_5to_año: educacionSuperior5toAñoRef.current.value,
      educacion_media_1er_año: educacionMedia1erAñoRef.current.value,
      educacion_media_2do_año: educacionMedia2doAñoRef.current.value,
      educacion_media_3er_año: educacionMedia3erAñoRef.current.value,
      educacion_media_4to_año: educacionMedia4toAñoRef.current.value,
      educacion_media_5to_año: educacionMedia5toAñoRef.current.value,
      año_evaluacion: añoEvaluacionRef.current.value,

    };

    erraseInput();

    const url = "http://localhost:3002/api/ayudantias";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(ayudantias),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setAyudantia(json?.data || []);
        setMessageSucces("Ayudantía insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_superior_1er_año" className="text-sm font-semibold text-gray-700">
              Educación Superior 1er Año:
            </label>
            <Input type="number" inputName="educacion_superior_1er_año" min="0" ref={educacionSuperior1erAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_superior_2do_año" className="text-sm font-semibold text-gray-700">
              Educación Superior 2do Año:
            </label>
            <Input type="number" inputName="educacion_superior_2do_año" min="0" ref={educacionSuperior2doAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_superior_3er_año" className="text-sm font-semibold text-gray-700">
              Educación Superior 3er Año:
            </label>
            <Input type="number" inputName="educacion_superior_3er_año" min="0" ref={educacionSuperior3erAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_superior_4to_año" className="text-sm font-semibold text-gray-700">
              Educación Superior 4to Año:
            </label>
            <Input type="number" inputName="educacion_superior_4to_año" min="0" ref={educacionSuperior4toAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_superior_5to_año" className="text-sm font-semibold text-gray-700">
              Educación Superior 5to Año:
            </label>
            <Input type="number" inputName="educacion_superior_5to_año" min="0" ref={educacionSuperior5toAñoRef} placeholder="Cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_media_1er_año" className="text-sm font-semibold text-gray-700">
              Educación Media 1er Año:
            </label>
            <Input type="number" inputName="educacion_media_1er_año" min="0" ref={educacionMedia1erAñoRef} placeholder="Cantidad" />
          </div>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_media_2do_año" className="text-sm font-semibold text-gray-700">
              Educación Media 2do Año:
            </label>
            <Input type="number" inputName="educacion_media_2do_año" min="0" ref={educacionMedia2doAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_media_3er_año" className="text-sm font-semibold text-gray-700">
              Educación Media 3er Año:
            </label>
            <Input type="number" inputName="educacion_media_3er_año" min="0" ref={educacionMedia3erAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_media_4to_año" className="text-sm font-semibold text-gray-700">
              Educación Media 4to Año:
            </label>
            <Input type="number" inputName="educacion_media_4to_año" min="0" ref={educacionMedia4toAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="educacion_media_5to_año" className="text-sm font-semibold text-gray-700">
              Educación Media 5to Año:
            </label>
            <Input type="number" inputName="educacion_media_5to_año" min="0" ref={educacionMedia5toAñoRef} placeholder="Cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2 col-span-4">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de Evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvaluacionRef} placeholder="Año" />
          </div>

          <button
            type="submit"
            className="col-span-4 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Ayudantía
          </button>
        </div>
      </form>
    </div>
  );
}
