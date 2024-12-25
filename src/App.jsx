import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registrarrion from "./pages/Registration/Registrarrion";
import firebaseConfig from "./FirebaseAuthentication/FirebaseAuthentication";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registrarrion/>}/>
      <Route path="/login" element={<Login/>}/>
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
