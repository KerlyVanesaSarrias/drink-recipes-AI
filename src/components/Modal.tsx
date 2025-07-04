import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { Recipe } from '../types';

export default function Modal() {

    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const recipe = useAppStore((state) => state.recipe)

    const renderIngredients = ( ) => {
        const ingredients: JSX.Element[] = []
        for(let i = 1; i <=6; i++) {
            const ingredient = recipe[`strIngredient${i}` as keyof Recipe]
            const measure = recipe[`strMeasure${i}` as keyof Recipe]
            if(ingredient && measure) {
                ingredients.push(
                    <li key={i} className='text-lg font-normal'>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }
        return ingredients
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {recipe.strDrink}
                                    </DialogTitle>
                                    <img
                                    src={recipe.strDrinkThumb} 
                                    alt={recipe.strDrink}
                                    className='mx-auto w-96'
                                    />
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredients and Quantities
                                    </DialogTitle>
                                    {renderIngredients()}
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instructions
                                    </DialogTitle>
                                    <p className='text-lg'>
                                        {recipe.strInstructions}
                                    </p>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}