import './styles/app.scss'
import Header from "./Components/Header/Header.tsx";
import Content from "./pages/Content.tsx";
import {FC, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import NotFound from "./pages/NotFound.tsx";


interface IAppProps {
}

const App: FC<IAppProps> = ({}) => {
  useEffect(() => {
    fetch('https://64c9f1e7b2980cec85c297c6.mockapi.io/pizzas')
  }, [])
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
