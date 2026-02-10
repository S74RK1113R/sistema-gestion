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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_1er_año">
              Educación superior 1er año:
            </label>
            <Input type="number" inputName="educacion_superior_1er_año" min="0" ref={educacionSuperior1erAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_2do_año">
              Educación superior 2do año:
            </label>
            <Input type="number" inputName="educacion_superior_2do_año" min="0" ref={educacionSuperior2doAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_3er_año">
              Educación superior 3er año:
            </label>
            <Input type="number" inputName="educacion_superior_3er_año" min="0" ref={educacionSuperior3erAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_4to_año">
              Educación superior 4to año:
            </label>
            <Input type="number" inputName="educacion_superior_4to_año" min="0" ref={educacionSuperior4toAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_5to_año">
              Educación superior 5to año:
            </label>
            <Input type="number" inputName="educacion_superior_5to_año" min="0" ref={educacionSuperior5toAñoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_1er_año">
              Educación media 1er año:
            </label>
            <Input type="number" inputName="educacion_media_1er_año" min="0" ref={educacionMedia1erAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_2do_año">
              Educación media 2do año:
            </label>
            <Input type="number" inputName="educacion_media_2do_año" min="0" ref={educacionMedia2doAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_3er_año">
              Educación media 3ro año:
            </label>
            <Input type="number" inputName="educacion_media_3er_año" min="0" ref={educacionMedia3erAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_4to_año">
              Educación media 4to año:
            </label>
            <Input type="number" inputName="educacion_media_4to_año" min="0" ref={educacionMedia4toAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_5to_año">
              Educación media 5to año:
            </label>
            <Input type="number" inputName="educacion_media_5to_año" min="0" ref={educacionMedia5toAñoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvaluacionRef} />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-4 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
