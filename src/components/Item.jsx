import { Link } from "react-router-dom";

export default function Item({children, href}) {
    return(
        <Link to={href} className="block bg-blue-700 w-full rounded-md p-1 hover:bg-blue-600 cursor-pointer">
            <li >
                {children}
            </li>
        </Link>
    )
}