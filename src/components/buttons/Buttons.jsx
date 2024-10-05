import BtnMount from './BtnMount'
import BtnSpace from './BtnSpace'
import BtnBirds from './BtnBirds'
import BtnArt from './BtnArt'

export default function Buttons({setSearch}) {

    return (

        <div className="md:w-7/12 md:flex md:justify-between lg:w-4/12 w-11/12">
            <BtnMount setSearch={setSearch} />
            <BtnSpace setSearch={setSearch} />
            <BtnBirds setSearch={setSearch} />
            <BtnArt setSearch={setSearch} />
        </div>

    )
}

