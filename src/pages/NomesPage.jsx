import { useState } from "react"

import Navbar from "../components/Navbar"

export default function NomesPage() {
  const [nome, setNome] = useState("")
  const [nomes, setNomes] = useState([])
  const [nomeSorteado, setNomeSorteado] = useState("")

  const adicionarNome = () => {
    if (nome.trim() === "") return

    setNomes([...nomes, nome])
    setNome("")
  }

  const sortear = () => {
    if (nomes.length == 0) {
      alert("Nenhum nome adicionado")
      return
    }

    const resultado = Math.floor(Math.random() * nomes.length)
    setNomeSorteado("Nome sorteado: " + nomes[resultado])
  }
  
  return (
    <div>
      <Navbar/>

      <h1 className="text-7xl text-[#b4b4dd]">Sortear Nomes</h1>
      <h1 className='text-3xl text-white mt-3'>Adicione os nomes no campo abaixo</h1>

      <div className="flex gap-5 mt-5">
        <input 
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onKeyDown={(e => {
            if (e.key === "Enter") {
              adicionarNome();
            }
          })}
          placeholder="digite aqui"
          className="bg-gray-900 text-white text-2xl w-100 p-2 border border-white rounded-sm"
        />
        <button 
          onClick={adicionarNome}
          className="bg-blue-300 text-black text-2xl p-2 cursor-pointer rounded-sm transition duration-300 ease-in-out hover:bg-white"
          >Adicionar
        </button>
      </div>

      <div className="bg-amber-50 mt-5 p-2 rounded-sm w-134">
        <h1 className="text-2xl mb-2">Nomes adicionados:</h1>
        <ul className="flex flex-wrap gap-5">
          {nomes.map((item, index) => (
            <li className="bg-gray-200 px-3 py-1 rounded min-w-20" key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <button 
        onClick={sortear} 
        className="bg-blue-300 text-black text-2xl p-2 cursor-pointer rounded-sm transition duration-300 ease-in-out mt-5 hover:bg-white">Sortear
      </button>

      <h1 className="text-2xl text-white mt-3">{nomeSorteado}</h1>
    </div>
  )
}