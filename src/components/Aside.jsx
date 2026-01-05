export default function Aside({children}) {
    return(
        <aside className="relative w-full h-[92vh] p-4 overflow-y-scroll scroll">
            {children}    
        </aside>
    )
}