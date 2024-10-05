import SearchIcon from './icons/SearchIcon'
import { useState } from 'react';


export default function SearchBar({ setSearch }) {
    const [inputValue, setInputValue] = useState('');
    const [showIcon, setShowIcon] = useState(false);

    const inputChange = (e) => {
        const value = e.target.value
        setInputValue(value)
        setShowIcon(value.trim().length > 0)
    }
    const restart = () => {
        if (inputValue.trim().length > 0) {
            setSearch(inputValue.trim());
            setInputValue('');
            setShowIcon(false); 
        }
    }

    return (
        <>
            <nav className='border-2 border-[#d7dbdf] bg-[#edeff0] rounded-md overflow-hidden flex items-center h-8 w-10/12 md:w-7/12 lg:w-4/12'>
                <input
                    type="search"
                    placeholder="Search..."
                    className="px-1 w-full bg-transparent text-black outline-none text-sm"
                    value={inputValue}
                    onChange={inputChange}
                />

                {showIcon&&(
                    <figure onClick={restart} className='m-0 h-full bg-[#051c33] cursor-pointer'>
                        <SearchIcon />
                    </figure>

               ) }

            </nav>

        </>
    )
}