import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks.tsx";
import {setCategories} from "../../../store/pizzaSlice.tsx";



interface ICategoriesProps {
}

const Categories: FC<ICategoriesProps> = ({}) => {
  const selectCategories = useAppSelector(state=>state.pizza.selectCategories)
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.pizza.pizzaCategories)
  const selectCategoriesHandler = (category: string) => {
    dispatch(setCategories(category))
  }

  return (
     <div className="categories">

       <ul className={'justify-center'}>
         {categories?.map((category) =>
            <div key={'1' + category} onClick={() => selectCategoriesHandler(category)}>
              <li className={category === selectCategories ? 'active' : ''}> {category} </li>
            </div>)}
       </ul>

     </div>
  )
}

export default Categories