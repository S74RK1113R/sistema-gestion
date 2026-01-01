export default function Input({inputName, ...props}) {
    return(
        <input  name={inputName} id={inputName} className="bg-zinc-100 rounded-md p-1 text-center" {...props}/>
    )
}