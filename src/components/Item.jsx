export default function Item({children}) {
    return(
        <li className="bg-blue-700 w-full rounded-md p-1 hover:bg-blue-600 cursor-pointer">
            {children}
        </li>
    )
}