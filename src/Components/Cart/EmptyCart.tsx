import {FC} from "react";
import {NavLink} from "react-router-dom";


interface IEmptyCartProps {

}


const EmptyCart: FC<IEmptyCartProps> = ({}) => {
  return (
     <div className={'flex flex-col items-center'}>
       <div>
         <img className={''}
            src="https://ouch-cdn2.icons8.com/WGuEhIvBGeM4EkinJyxJRjZ6Pi1DJbDdwJYi3q0W4UI/rs:fit:366:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTYw/L2NlNTI5YjI4LThk/YWUtNGM0ZC05ZDQ1/LTcyNGE3ZGUzOTU3/NC5zdmc.png"
            alt=""/>
       </div>
       <div className={'text-center m-20 text-6xl'}>корзина пуста</div>
       <NavLink to="/" className="button max-w-sm flex justify-center button--outline button--add go-back-btn">
         <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
         </svg>
         <span>Вернуться назад</span>
       </NavLink>
     </div>
  )
}

export default EmptyCart