import { useState } from "react"
import Github from "../Github/Github"
import useDebounce from "../../hooks/useDebounce"



function Search() {

     const [searchTerm, setSearchTerm] = useState('')
     const debouncedCallback = useDebounce((e) => setSearchTerm(e.target.value))

  return (
    <>
     <h1 className="bg-gray-500 text-white p-4 m-4 font-bold text-3xl">
        GITHUB API INTEGRATION{" "}
      </h1>
      <input
        className="w-[500px] p-3 bg-transparent border-2 border-fuchsia-700 outline-none text-center "
        type="text"
        placeholder="Entre Github Phot Id"

        onChange={debouncedCallback}
      />
       <Github userName={searchTerm} />
      
    </>
  )
}

export default Search