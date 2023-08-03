import Categories from "../Components/Content/Categories/Categories.tsx";
import SortPopup from "../Components/Content/Sort/SortPopup.tsx";
import {FC, useEffect, useState} from "react";
import PizzaList from "../Components/Content/PizzaBlock/PizzaList.tsx";
import {useAppSelector} from "../hooks.tsx";


interface IContentProps {
}


const Content: FC<IContentProps> = ({}) => {

  const categories = useAppSelector(state => state.pizza.pizzaCategories)
  const sortedOptions = useAppSelector(state => state.pizza.sortedOptions);
  const pizzas = useAppSelector(state => state.pizza.pizzaList)
  const [activeCategories, setActiveCategories] = useState('Все');
  const [sortBy, setSortBy] = useState(sortedOptions[0]);
  const filterCategories = pizzas.filter(pizza => pizza.category.includes(activeCategories))

  return (
     <div>

       <div className="container">
         <div className="content__top">
           <Categories
              categories={categories}
              activeCategories={activeCategories}
              setActiveCategories={setActiveCategories}
           />
           <SortPopup
              sortedOptions={sortedOptions}
              sortBy={sortBy}
              setSortBy={setSortBy}
           />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
           <PizzaList pizzaList={filterCategories}/>
         </div>
       </div>

     </div>
  )
}

export default Content