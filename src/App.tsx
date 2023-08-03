import './styles/app.scss'
import Header from "./Components/Header/Header.tsx";
import Content from "./pages/Content.tsx";
import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.tsx";


interface IAppProps {
}

const App: FC<IAppProps> = ({}) => {

   return (
       <>
          <div className="wrapper">
             <Header/>
             <div className="content">
                <Routes>
                   <Route path={'/'}  element={<Content/>}/>
                   <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
             </div>
          </div>
       </>
   )
}

export default App
