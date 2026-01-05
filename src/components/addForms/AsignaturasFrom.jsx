export default function AsignaturasForm() {
    return(
        <div>
            <form action="">
                <div className=" grid grid-rows-5 grid-cols-10 gap-4 p-5">
                    <h1>Añadir Asignaturas</h1>

                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" name="codigo" />
                    <label htmlFor="intranet">Intranet:</label>
                    <input type="text" id="intranet" name="intranet"/>
                    <label htmlFor="disciplinas">Disciplinas:</label>
                    <input type="text" id="disciplinas" name="disciplinas"/>
                    <label htmlFor="año">Año:</label>
                    <input type="text" name="año" id="año" />
                    <label htmlFor="periodo">Periodo:</label>
                    <input type="text" name="periodo" id="periodo" />
                    <label htmlFor="modalidad">Modalidad:</label>
                    <input type="text" name="modalidad" id="modalidad" />
                    <label htmlFor="curriculo">Currículo:</label>
                    <input type="text" name="curriculo" id="curriculo" />
                    <label htmlFor="bibliografia">Bibliografía:</label>
                    <select name="bibliografia" id="bibliografia">
                        <option value="1">si</option>
                    </select>

                    <button type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}