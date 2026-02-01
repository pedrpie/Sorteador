import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='Navbar'>
      <Link to='/' className='text-3xl font-bold text-white'>Sorteador</Link>
      <nav className='flex gap-9'>
        <Link to='/' className='text-white text-2xl'>Início</Link>
        <Link to='https://www.github.com/pedrpie/' target='_blank' className='text-white text-2xl'>Github</Link>
      </nav>
    </div>
  )
}
