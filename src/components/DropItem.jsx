import { Link } from "react-router-dom";

export default function DropItem({children, href}) {
    return(
        <Link to={href} className="text-left block text-zinc-800 border-l-2 border-blue-950 px-2 hover:text-zinc-700">
            <li >
                {children}
            </li>
        </Link>
    )
}