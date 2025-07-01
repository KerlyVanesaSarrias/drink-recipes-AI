import { useAppStore } from "../stores/useAppStore"

const IndexPage = () => {

    useAppStore((state) => state.categories)
  return (
    <div>
        Drinksss
    </div>
  )
}

export default IndexPage
