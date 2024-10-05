
export default function BtnArt({setSearch}) {
    return (
      <div>
        <button id="Art" value='Art'className="hover:cursor-pointer px-4 py-0.5 md:my-2 rounded-sm text-xs bg-[#051c33] text-white text-center w-full" onClick={()=>setSearch('Art')}>Art</button> 
      </div>
    )
  }
