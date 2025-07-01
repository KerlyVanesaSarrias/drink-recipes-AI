import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from 'react';

const IndexPage = () => {

    const drinks = useAppStore((state) => state.drinks)

    const hasDrinks = useMemo(() => drinks.drinks.length , [drinks])
  return (
    <div>
        <h1 className="text-6xl font-bold">
          Recetas
        </h1>
        {hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 my-10 gap-10 ">
            {drinks.drinks.map((drink) =>(
                <DrinkCard
                key={drink.idDrink}
                drink = {drink}
                />
            ))}
          </div>
        ) :
        (
          <>
          <p className="my-10 text-center text-2xl">
            No hay resultados aún, utiliza el formulario para buscar recetas
          </p>
          </>
        )}
    </div>
  )
}

export default IndexPage
