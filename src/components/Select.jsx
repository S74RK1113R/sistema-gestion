export default function Select({inputName, children, ...props}) {
    return(
        <select name={inputName} id={inputName} className="bg-zinc-100 rounded-md p-1 text-center ring-2 ring-blue-400/40 w-full" {...props}>
            {children}
        </select>
    )
}