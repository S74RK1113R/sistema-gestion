import { Link } from "react-router-dom";

export default function DropItem({children, href}) {
    return(
        <Link to={href} className="text-left block text-white bg-slate-600 hover:bg-slate-500 rounded-md px-3 py-2 transition-colors border-l-4 border-transparent hover:border-blue-400 text-sm font-medium shadow-sm">
            <li>
                {children}
            </li>
        </Link>
    )
}