import SearchBar from './components/SearchBar'
import Buttons from './components/buttons/Buttons'
import Title from './components/Title';
import TitleImg from './components/TitleImg'
import Gallery from './components/gallery/Gallery'
import fetchData from './components/utilities/fetchData'
import { useState, useEffect } from "react";



export default function App() {
  const [search, setSearch] = useState('Mountain');
  const [results, setResults] = useState([]);

  function getData() {
    const key = '0789060cf559674ff2a5e764627c8924'
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${search}&per_page=24&format=json&nojsoncallback=1`

    fetchData(url)
      .then(data => setResults(data.photos.photo))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getData()
  }, [search])

  return (
    <>
      <main className='font-mono font-semibold'>

        <header className='flex justify-center mt-24 mb-8'>
          <Title />
        </header>

        <nav className='flex flex-col items-center gap-8'>
          <SearchBar setSearch={setSearch} />
          <Buttons setSearch={setSearch} />
        </nav>

        <section>
          <header className='flex justify-center my-7'>
            <TitleImg title={search} />
          </header>
          <article className='lg:justify-between lg:mx-20 lg:flex lg:flex-wrap lg:w-10/12 md:flex md:flex-wrap md:justify-between flex flex-wrap justify-center '>

            {
              results &&
              results.map((rs) =>
                <Gallery key={rs.id} img={rs} />)
            }

          </article>

        </section>

      </main>
    </>
  )
}





