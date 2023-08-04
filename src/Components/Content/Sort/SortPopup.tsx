import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../../../hooks.tsx";
import {sorted} from "../../../store/pizzaSlice.tsx";

interface ISortPopup {
   sortedOptions:Array<string>,
   sortBy:string,
   setSortBy:Dispatch<SetStateAction<string>>
}

const SortPopup: FC<ISortPopup> = ({sortedOptions,sortBy,setSortBy}) => {
const dispatch = useAppDispatch()
   const [visiblePopup, setVisiblePopup] = useState(false)
   const sortRef = useRef()
   const handleOutsideSort = (e:MouseEvent) => {
      // @ts-ignore
      if(!e.composedPath().includes(sortRef.current)){
         setVisiblePopup(false)
      }
   }

   useEffect(() => {
      document.body.addEventListener('click', handleOutsideSort)
      dispatch(sorted(sortBy))
   }, [])


   const toggleVisiblePopupHandler = () => setVisiblePopup(!visiblePopup)
    const sortHandler = (e:React.MouseEvent<HTMLUListElement>)=>{
       // @ts-ignore
       setSortBy(e.target.textContent)
       dispatch(sorted(e.target.textContent))
       setVisiblePopup(!visiblePopup)
    }



   return (
          <div ref={sortRef} className="sort">
             <div
                 className="sort__label"
                 onClick={toggleVisiblePopupHandler}>
                <svg
                    className={visiblePopup?'rotate':''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                   <path
                       d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                       fill="#2C2C2C"
                   />
                </svg>
                <b>Сортировка по:</b>
                <span>{sortBy}</span>
             </div>
             {visiblePopup && <div className="sort__popup">
               <ul
                  onClick={sortHandler}>{sortedOptions.map(option => <li
                   key={option}
                   className={sortBy === option ? 'active' : ''}>{option}</li>)}</ul>
             </div>}
          </div>
   )
}
export default SortPopup