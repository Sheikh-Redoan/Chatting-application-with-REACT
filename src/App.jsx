import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registrarrion from "./pages/Registration/Registrarrion";
import firebaseConfig from "./FirebaseAuthentication/FirebaseAuthentication";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registrarrion/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/home" element={<Home/>}/>
    </Route>
  )
);

function App() {  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
