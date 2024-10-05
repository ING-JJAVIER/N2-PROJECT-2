
export default function BtnMount({setSearch}) {
  
    return (
      <div >
        <button id="Mountain" value='Mountain'className="hover:cursor-pointer px-4 py-0.5 md:my-2 rounded-sm text-xs bg-[#051c33] text-white text-center w-full" onClick={()=>setSearch('Mountain')}>Mountain</button> 
      </div>
    )
  }
