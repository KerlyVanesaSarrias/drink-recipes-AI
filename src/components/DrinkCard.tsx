import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}



const DrinkCard = ({ drink }: DrinkCardProps) => {

    const selectRecipe = useAppStore((state) =>state.selectRecipe)
    return (
        <div className="boder shadow-lg">
            <div className="overflow-hidden"> 
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                    />
            </div>
            <div className="p-5">
                     
                    <h1 className="text-2xl truncate font-black">{drink.strDrink}</h1>
                    <button
                    type="button"
                    className="bg-amber-700 hover:bg-amber-800 mt-5 w-full p-3 font-bold text-white text-lg rounded-xl"
                    onClick={() => selectRecipe(drink.idDrink)}
                    >
                        See recipe
                    </button>
            </div>
          
        </div>

    )
}

export default DrinkCard