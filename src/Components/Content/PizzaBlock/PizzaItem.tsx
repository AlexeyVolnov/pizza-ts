import ButtonAddPizza from "./ButtonAdd/ButtonAddPizza.tsx";
import PizzaOption from "./PizzaOption/PizzaOption.tsx";
import {FC} from "react";
import {IPizza} from "../../../types/IPizza.ts";


interface IPizzaItemProps {
  pizza: IPizza
}

const PizzaItem: FC<IPizzaItemProps> = ({pizza}) => {
  return (
     <div className="">
       <img
          className="m-auto"
          src={pizza.imageUrl}
          alt="Pizza"
       />

       <h4 className="pizza-block__title">{pizza.name}</h4>
       <PizzaOption types={pizza.types} sizes={pizza.sizes}/>
       <div className="pizza-block__bottom">
         <div className="pizza-block__price">От {pizza.prise}</div>
         <ButtonAddPizza pizza={pizza}/>
       </div>
     </div>
  );
}

export default PizzaItem