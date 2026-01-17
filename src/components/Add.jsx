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
      {openForm && <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full bg-zinc-100 max-w-11/12 max-h-11/12 rounded-xl p-2 z-50">
        <div
          data-title={"titleBar"}
          className="flex flex-row justify-end items-center rounded-md"
        >
          <div className="font-bold mx-6 text-xl text-nowrap">{formTitle}</div>
          <div className="w-full"></div>
          <div onClick={handleCloseForm} className="bg-red-500 text-zinc-200 rounded-full mx-1 my-1 cursor-pointer hover:bg-red-600 hover:text-white">
            <AddIcon className="size-8 rotate-45" />
          </div>
        </div>
        <section className="size-full bg-amber-200 rounded-md">
          {children}
        </section>
      </div>}

      <button
        onClick={handleOpenForm}
        className="fixed p-1 size-12 bg-green-500 text-white font-bold rounded-full bottom-4 right-4 hover:bg-green-600 flex items-center text-4xl justify-center shadow-lg"
      >
        <AddIcon className="w-full h-full" />
      </button>
    </>
  );
}
