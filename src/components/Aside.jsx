export default function Aside({children}) {
    return(
        <aside className="w-full h-[92vh] p-6 overflow-y-scroll scroll print:w-screen bg-white">
            {children}    
        </aside>
    )
}