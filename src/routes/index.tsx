import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

  import {HomePage} from '../pages/Home'
  import {EditPage} from '../pages/Edit'
  import {RegisterPage} from '../pages/Register'
import { Error } from "../pages/Error";


  export const RoutesApp:React.FC=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<HomePage/>}/>
                <Route path="/edit/:id" element={<EditPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )

}