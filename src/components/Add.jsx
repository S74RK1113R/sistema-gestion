import { AddIcon } from "../icons/Icons";

export default function Add({ ...props }) {

    return (
        <div className="w-full h-full relative">
            <button
                className="p-1 size-12 bg-green-500 text-white font-bold rounded-full fixed bottom-4 right-4 hover:bg-green-600 flex items-center text-4xl justify-center shadow-lg"
                {...props}
            >
                <AddIcon className="w-full h-full" />
            </button>

        </div>
    );
}