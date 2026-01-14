import { AddIcon } from "../icons/Icons";

export default function Add(){
    return (
        <button className="fixed p-1 size-12 bg-green-500 text-white font-bold rounded-full bottom-4 right-4 hover:bg-green-600 flex items-center text-4xl justify-center shadow-lg">
            <AddIcon className="w-full h-full" />
        </button> 
    );
}