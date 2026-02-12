export default function Aside({children}) {
    return(
        <aside className="w-full h-[92vh] p-4 overflow-y-scroll scroll print:w-screen">
            {children}    
        </aside>
    )
}