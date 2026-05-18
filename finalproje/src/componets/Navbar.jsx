import logo from '../assets/logo.png'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <>
      <header className='bg-blue-300 text-white px-8 py-2'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto'>
          <div className="flex items-start">
            <img src={logo} alt='logo' className='w-12 h-12' />
            <div className=' font-bold text-2xl ml-2'>
            </div>
          </div>
          <div className='flex gap-6'>
            <Link to='/'>Anasayfa</Link>
            <Link to='/sepetim'>Sepetim</Link>
          </div>
        </nav>
      </header>
    </>
  )
}
