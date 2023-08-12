import {
  ChangeEvent,
  FC,
} from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks.tsx";
import {setSearch} from "../../../store/pizzaSlice.tsx";


interface ISearchProps {}


const Search: FC<ISearchProps> = ({}) => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(state=>state.pizza.search)

  const searchDeleteHandler = ()=>dispatch(setSearch(''))
  const searchInputHandler = (e:ChangeEvent<HTMLInputElement>)=>dispatch(setSearch(e.target.value))

  return (
     <div className={'bg-gray-600 rounded flex mt-10 items-center px-2 w-min text-white'}>
       🔎
       <input
          placeholder={'Поиск'}
          type="text"
          value={search}
          className={'bg-inherit h-[40px] px-2'}
          onInput={searchInputHandler}/>
       {search && <button onClick={searchDeleteHandler}>❌</button>}
     </div>
  )
}

export default Search