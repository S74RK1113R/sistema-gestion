import { useState } from "react";
import { AddIcon } from "../icons/Icons";

export default function Add({ children, formTitle }) {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      {openForm && <div className="shadow-2xl shadow-black/40 fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-50">
        <div className="bg-white rounded-lg max-w-3xl w-11/12 max-h-[90vh] shadow-xl border border-gray-200 flex flex-col">
          <div
            data-title={"titleBar"}
            className="flex flex-row justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-slate-50 to-slate-100"
          >
            <div className="font-semibold text-lg text-slate-800">{formTitle}</div>
            <button 
              onClick={handleCloseForm} 
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 transition-colors flex items-center justify-center"
              title="Cerrar"
            >
              <AddIcon className="size-5 rotate-45" />
            </button>
          </div>
          <section className="flex-1 overflow-auto scroll p-6">
            {children}
          </section>
        </div>
      </div>}

      <button
        onClick={handleOpenForm}
        className="fixed p-3 size-14 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full bottom-6 right-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        title="Agregar nuevo registro"
      >
        <AddIcon className="w-6 h-6" />
      </button>
    </>
  );
}
