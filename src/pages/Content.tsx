import Categories from "../Components/Content/Categories/Categories.tsx";
import SortPopup from "../Components/Content/Sort/SortPopup.tsx";
import {FC} from "react";
import PizzaList from "../Components/Content/PizzaBlock/PizzaList.tsx";
import {useAppSelector} from "../hooks.tsx";
import Paginate from "../Components/Pagination/Paginate.tsx";
import Search from "../Components/Content/Search/Search.tsx";


interface IContentProps {
}


const Content: FC<IContentProps> = ({}) => {

  const pizzas = useAppSelector(state => state.pizza.filteredPizzes)

const setCounterPagination = ()=>{}
  return (
     <>

       <div className="container">
         <div className="content__top">
           <Categories/>
           <SortPopup/>
         </div>
         <Search/>
         <h2 className="content__title">Все пиццы</h2>
           <PizzaList pizzaList={pizzas}/>
         <Paginate setCounterPagination={setCounterPagination} pageCount={10}/>
       </div>

     </>
  )
}

export default Content