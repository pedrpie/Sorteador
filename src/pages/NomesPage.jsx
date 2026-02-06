import { useState } from "react"

import Navbar from "../components/Navbar"
import NomesModal from "../components/NomesModal.jsx"
import { IoClose } from "react-icons/io5"

export default function NomesPage() {
  const [nome, setNome] = useState("")
  const [nomes, setNomes] = useState([])
  const [nomeSorteado, setNomeSorteado] = useState("")

  const adicionarNome = () => {
    if (nome.trim() === "") return

    setNomes([...nomes, nome])
    setNome("")
  }

  function removerNome(index) {
    setNomes(nomes.filter((_, i) => i !== index))
  }

  const sortear = () => {
    if (nomes.length == 0) {
      alert("Nenhum nome adicionado")
      return false
    }

    const resultado = Math.floor(Math.random() * nomes.length)
    setNomeSorteado(nomes[resultado])
    return true
  }

  return (
    <div className="px-4">
      <Navbar />

      <h1 id="TitleNomes" className="text-7xl text-[#b4b4dd]">
        Sortear Nomes
      </h1>
      <h1 id="DescriptionNome" className="text-3xl text-white mt-3">
        Adicione os nomes no campo abaixo
      </h1>

      <div className="flex gap-5 mt-5">
        <input
          id="input"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              adicionarNome();
            }
          }}
          placeholder="digite aqui"
          className="bg-gray-900 text-white text-2xl w-full p-2 border border-white rounded-sm"
        />
        <button
          onClick={adicionarNome}
          className="bg-purple-500 text-white text-2xl p-2 cursor-pointer rounded-sm transition duration-300 ease-in-out hover:bg-purple-400"
        >
          Adicionar
        </button>
      </div>

      <div
        id="containerNomesAdicionados"
        className="bg-amber-50 mt-5 p-2 rounded-sm w-full"
      >
        <h1 className="text-2xl mb-2">Nomes adicionados:</h1>
        <ul className="flex flex-wrap gap-5">
          {nomes.map((item, index) => (
            <li
              className="bg-gray-200 px-3 py-1 rounded min-w-20 flex items-center justify-between"
              key={index}
            >
              {item}
              <button
                onClick={() => removerNome(index)}
                className="ml-2 text-red-500 cursor-pointer"
              >
                <IoClose />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <NomesModal onClick={sortear} nomeSorteado={nomeSorteado} nomes={nomes} />
    </div>
  )
}
