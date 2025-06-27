import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header className='bg-slate-800'>
        <div className='mx-auto container px-5 py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src="/logo.svg" alt="logotype" />
                </div>
                <nav className="flex gap-4">
                    <NavLink className={({isActive})=> isActive ? "text-orange-300 font-bold uppercase" :"text-white font-bold uppercase"} to="/">Inicio</NavLink>
                    <NavLink className={({isActive})=> isActive ? "text-orange-300 font-bold uppercase" :"text-white font-bold uppercase"} to="/favorites">Favorites</NavLink>

                </nav>
            </div>
        </div>

    </header>
  )
}

export default Header