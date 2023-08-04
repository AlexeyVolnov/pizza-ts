import {FC} from "react";
import PizzaItem from "./PizzaItem.tsx";
import {IPizza} from "../../../types/IPizza.ts";


interface IPizzaListProps {
   pizzaList:Array<IPizza>
}


const PizzaList: FC<IPizzaListProps> = ({pizzaList}) => {

   return (
       <div className={'grid grid-cols-4 gap-5 items-center justify-items-center max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'}>
          {pizzaList.map(pizza=><PizzaItem key={pizza.id} pizza={pizza}/>)}
       </div>
   )
}

export default PizzaList