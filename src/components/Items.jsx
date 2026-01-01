export default function Items({children}) {
    return(
        <li className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700 cursor-pointer">
            {children}
        </li>
    )
}