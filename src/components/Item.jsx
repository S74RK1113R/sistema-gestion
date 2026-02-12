import { Link } from "react-router-dom";

export default function Item({children, href}) {
    return(
        <Link to={href} className="block bg-slate-700 w-full rounded-lg px-4 py-2.5 hover:bg-slate-600 cursor-pointer transition-colors text-white font-medium text-sm shadow-sm border-l-4 border-slate-700 hover:border-blue-500">
            <li>
                {children}
            </li>
        </Link>
    )
}