import {FC} from "react";
import {NavLink} from "react-router-dom";


interface INotFoundProps {

}


const NotFound: FC<INotFoundProps> = ({}) => {
  return (
     <div className={'flex-col flex items-center gap-y-10 justify-center mt-20 mb-20'}>
       <span className={'text-6xl'}>😥</span>
       <h5 className={'text-4xl'}>Ничего не найдено</h5>
       <NavLink to={'/'}>
         <button className={'button'}>На Главную</button>
       </NavLink>
     </div>
  )
}

export default NotFound