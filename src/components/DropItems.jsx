export default function DropItems({children}) {
    return(
        <li className="text-left text-zinc-800 border-l-2 border-blue-950 px-2 hover:text-zinc-700">
            {children}
        </li>
    )
}