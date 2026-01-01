import { useState } from "react"
import { ArrowForward } from "../icons/Icons"

export default function DropDownItem({children, identification}) {
    const [isClicked, setIsCLiked] = useState(false)

    function handleClick(){
        setIsCLiked(!isClicked)
    }

    return(
        <ul className={`cursor-pointer transition-[grid-template-rows] w-full grid ${isClicked ? "grid-rows-[max-content_1fr]": "grid-rows-[max-content_0fr]"}`} >
            <li className="relative bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700" onClick={handleClick}>
                {identification}
                <ArrowForward className={`text-white transition-transform absolute size-7 top-1/2 -translate-y-1/2 right-0 ${isClicked && "rotate-90"}`}/>  
            </li>
            <li className="w-11/12 mx-auto overflow-hidden grid gap-0.5">{children}</li>     
        </ul>
    )
}