import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
        <Navbar />

        <h1 className='text-8xl text-[#b4b4dd] text-shadow-lg'>Sorteador</h1>
        <div>
            <h1 className='text-3xl text-white mt-3'>O que você deseja sortear?</h1>
            <div className='flex justify-center gap-5 mt-5'>
                <Link 
                    to="/nomes" 
                    className='bg-purple-500 text-white text-2xl p-2 rounded-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-400'>Nomes</Link>
                <Link 
                    to="/numeros" 
                    className='bg-purple-500 text-white text-2xl p-2 rounded-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-purple-400'>Números</Link>
            </div>
        </div>
    </div>
  )
}
