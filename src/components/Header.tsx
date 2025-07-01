import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


const Header = () => {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    }
    )

    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore((state) => state.fetchCategories)
    useEffect(() => {
        fetchCategories()
    }, [])

    const categories = useAppStore((state) => state.categories)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(searchFilters).includes('')){
            console.log('Todos lo campos son requeridos');
            return
        }
    }

    return (
        <header className={isHome ? 'bg-center bg-cover bg-hero' : ''}>
            <div className='mx-auto container px-5 py-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='w-32' src="/logo.svg" alt="logotype" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink className={({ isActive }) => isActive ? "text-orange-300 font-bold uppercase" : "text-white font-bold uppercase"} to="/">Inicio</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-orange-300 font-bold uppercase" : "text-white font-bold uppercase"} to="/favorites">Favorites</NavLink>

                    </nav>
                </div>
                {
                    isHome && (
                        <form 
                            className="md:w-1/2 2xl:w-1/3 mt-5 space-y-6 "
                            onSubmit={handleSubmit}
                            >
                            <div className="space-y-1">
                                <label className="block text-white  font-semibold text-lg" htmlFor="ingredient">Nombre o ingredientes</label>
                                <input
                                    id="ingredient"
                                    type="text"
                                    name="ingredient"
                                    placeholder="Nombre o ingrediente. Ej. Mojito, Vodka, Café..."
                                    className="p-3 w-full rounded-lg focus: outline-none bg-amber-50"
                                    onChange={handleChange}
                                    value={searchFilters.ingredient} />
                            </div>
                            <div className="space-y-1">
                                <label className="block text-white  font-semibold text-lg" htmlFor="category">Categoría</label>
                                <select
                                    id="category"
                                    name="category"
                                    className="p-3 w-full rounded-lg focus: outline-none bg-amber-50"
                                    onChange={handleChange}
                                    value={searchFilters.category}
                                >
                                    <option value="">--Seleccione--</option>
                                    {
                                        categories.drinks.map(
                                            (category) => (
                                                <option value={category.strCategory} key={category.strCategory}>{category.strCategory}</option>
                                            )
                                        )
                                    }
                                </select>
                            </div>
                            <input type="submit" value="Buscar Recetas" className="cursor-pointer  bg-amber-700 hover:bg-amber-800 text-white w-full font-bold p-2 rounded-lg" />
                        </form>
                    )
                }
            </div>

        </header>
    )
}

export default Header