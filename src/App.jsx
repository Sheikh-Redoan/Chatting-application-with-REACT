import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Messages from "./Pages/Messages/Messages";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import UserFriend from "./Pages/UserFriend/UserFriend";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import firebaseConfig from "./FirebaseAuthentication/FirebaseAuthentication";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/message" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/userfriend" element={<UserFriend />} />
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
