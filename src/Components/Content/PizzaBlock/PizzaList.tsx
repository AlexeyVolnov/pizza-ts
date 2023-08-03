import {FC} from "react";
import PizzaItem from "./PizzaItem.tsx";
import {IPizza} from "../../../types/IPizza.ts";


interface IPizzaListProps {
   pizzaList:Array<IPizza>
}


const PizzaList: FC<IPizzaListProps> = ({pizzaList}) => {

   return (
       <div className={'flex flex-wrap'}>
          {pizzaList.map(pizza=><PizzaItem key={pizza.id} pizza={pizza}/>)}
       </div>
   )
}

export default PizzaList