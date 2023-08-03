import {FC, ReactNode} from "react";

interface ICartButtonProps {
   children:ReactNode
}

const CartButton:FC<ICartButtonProps> = ({children}) => {
  return (
     <div>
       {children}
     </div>
  )
}


export default CartButton