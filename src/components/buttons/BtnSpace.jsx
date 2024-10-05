export default function BtnSpace({setSearch}) {
    return (
      <div>
        <button id="Space" value='Space'className="hover:cursor-pointer px-4 py-0.5 md:my-2 rounded-sm text-xs bg-[#051c33] text-white text-center w-full" onClick={()=>setSearch('Space')}>Space</button> 
      </div>
    )
  }
