export default function Input({inputName, ...props}) {
    return(
        <input  name={inputName} id={inputName} className="bg-white rounded-lg px-3 py-2 text-sm text-slate-700 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all shadow-sm placeholder-gray-400" required {...props}/>
    )
}