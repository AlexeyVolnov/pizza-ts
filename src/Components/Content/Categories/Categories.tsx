import {Dispatch, FC, SetStateAction} from 'react';



interface ICategoriesProps {
  categories: String[],
  activeCategories:string,
  setActiveCategories:Dispatch<SetStateAction<string>>
}

const Categories: FC<ICategoriesProps> = ({categories,activeCategories,setActiveCategories}) => {

  const selectCategoriesHandler = (category:any) => {
    setActiveCategories(category)
  }

  return (
       <div className="categories">
         <ul className={'justify-center'}>
           {categories?.map((category) =>
              <div key={'1'+category} onClick={() => selectCategoriesHandler(category)}>
                <li className={category === activeCategories ? 'active' : ''}> {category} </li>
              </div>)}
         </ul>
       </div>
  )
}

export default Categories