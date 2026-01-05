import { AddIcon } from "../icons/Icons";
import { useState } from "react";

export default function Add({children}) {
    const [open, setOpen] = useState(false);

    function openForm(){
        setOpen(true);
    }
    function closeForm(){
        setOpen(false);
    }

    return (
        <div className="absolute w-full h-full top-0 left-0 items-center justify-center">
            {open && <div className="absolute top-0  rounded-md shadow-lg shadow-zinc-800/60">
                <div className="relative flex justify-end p-2">
                    <button className="absolute top-3.5 right-0" onClick={closeForm}>
                        <AddIcon className="w-6 h-6 rotate-45 bg-red-500 rounded-full text-white hover:bg-red-600"/>
                    </button>
                </div>
                {/*formulario de agregar */}
                {children}
            </div>}

            <button
                className="p-1 size-12 bg-green-500 text-white font-bold rounded-full fixed bottom-4 right-4 hover:bg-green-600 flex items-center text-4xl justify-center shadow-lg"
                onClick={openForm}
            >
                <AddIcon className="w-full h-full" />
            </button>

        </div>
    );
}