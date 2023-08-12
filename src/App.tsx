import './styles/app.scss'
import Header from "./Components/Header/Header.tsx";
import Content from "./pages/Content.tsx";
import {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import NotFound from "./pages/NotFound.tsx";
import {useAppDispatch} from "./hooks.tsx";
import {fetchPizzas} from "./store/pizzaSlice.tsx";


interface IAppProps {
}

const App: FC<IAppProps> = ({}) => {
const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchPizzas)
  },[])
  return (
     <>
       <div className="wrapper">
         <Header/>
         <div className="content">
           <Routes>
             <Route path={'/'} element={<Content/>}/>
             <Route path={'/cart'} element={<Cart/>}/>
             <Route path={'*'} element={<NotFound/>}/>
           </Routes>
         </div>
       </div>
     </>
  )
}

export default App
