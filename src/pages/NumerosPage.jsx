import { useState } from "react"

import Navbar from "../components/Navbar"

export default function NumerosPage() {
  const [inicio, setInicio] = useState("")
  const [fim, setFim] = useState("")
  const [numeros, setNumeros] = useState(null)

  function sortear() {
    const inicioNumero = Number(inicio)
    const fimNumero = Number(fim)

    if (isNaN(inicioNumero) || isNaN(fimNumero)){
      alert("Digite números válidos")
      return
    }

    if (inicioNumero > fimNumero){
      alert("O número inicial deve ser menor que o final")
      return
    }

    const resultado = Math.floor(Math.random() * (fimNumero - inicioNumero + 1)) + inicioNumero;
    setNumeros(resultado)
  }

  return (
    <div>
      <Navbar />

      <h1 id="TitleNumeros" className="text-7xl text-[#b4b4dd]">Sortear Números</h1>
      <h2 id="DescriptionNumeros" className='text-3xl text-white mt-3'>Selecione os números abaixo</h2>

      <div className="flex gap-5 justify-center mt-5">
        <input
          type="number"
          placeholder="Início"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          className="bg-gray-900 text-white text-2xl border border-white rounded-sm w-30 p-2"
        />

        <input
          type="number"
          placeholder="Fim"
          value={fim}
          onChange={(e) => setFim(e.target.value)}
          className="bg-gray-900 text-white text-2xl border border-white rounded-sm w-30 p-2"
        />
      </div>

      <button 
        onClick={sortear}
        className="bg-purple-500 text-white text-2xl p-2 cursor-pointer rounded-sm transition duration-300 ease-in-out mt-5 hover:bg-purple-400"
        >Sortear
      </button>

      <div className="mt-5">
        <p className="text-5xl text-white">{numeros}</p>
      </div>
    </div>
  )
}