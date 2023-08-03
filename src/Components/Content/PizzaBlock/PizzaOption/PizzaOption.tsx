import {FC} from "react";

interface IPizzaOptionProps {
   types:Array<number>,
   sizes:Array<number>,
}

const PizzaOption:FC<IPizzaOptionProps> = ({sizes}) => {
  return (
     <div>
       <div className="pizza-block__selector">
         <ul>
           <li className="active">тонкое</li>
           <li>традиционное</li>
         </ul>
         <ul>
            {sizes.map(size=><li key={size}>{size} см.</li>)}
         </ul>
       </div>
     </div>
  )
}


export default PizzaOption