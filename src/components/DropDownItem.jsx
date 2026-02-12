import { useState } from "react"
import { ArrowForward } from "../icons/Icons"

export default function DropDownItem({children, identification}) {
    const [isClicked, setIsCLiked] = useState(false)

    function handleClick(){
        setIsCLiked(!isClicked)
    }

    return(
        <ul className={`cursor-pointer transition-[grid-template-rows] w-full grid ${isClicked ? "grid-rows-[max-content_1fr]": "grid-rows-[max-content_0fr]"}`} >
            <li className="relative bg-slate-700 w-full rounded-lg px-4 py-2.5 hover:bg-slate-600 text-white font-medium text-sm shadow-sm transition-colors border-l-4 border-slate-700 hover:border-blue-500" onClick={handleClick}>
                {identification}
                <ArrowForward className={`text-white transition-transform absolute size-5 top-1/2 -translate-y-1/2 right-4 ${isClicked && "rotate-90"}`}/>  
            </li>
            <ul className="w-11/12 mx-auto overflow-hidden grid gap-1">{children}</ul>     
        </ul>
    )
}