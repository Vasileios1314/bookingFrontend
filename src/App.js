import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox, Footer } from "./components";
import {
  About,
  Apartments,
  Booking,
  CheckOut,
  Contact,
  Homepage,
  Login,
  SignUp,
} from "./pages";
import { Discover } from "./pages/Discover";

function App() {
  const dispatch = useDispatch();
  const [homePage, setHomePage] = useState(false);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage onRouteChange={setHomePage} />} />
        <Route
          path="/signup"
          element={<SignUp onRouteChange={setHomePage} />}
        />
        <Route path="/login" element={<Login onRouteChange={setHomePage} />} />
        <Route path="/about" element={<About onRouteChange={setHomePage} />} />
        <Route
          path="/discover"
          element={<Discover onRouteChange={setHomePage} />}
        />
        <Route
          path="/contact"
          element={<Contact onRouteChange={setHomePage} />}
        />
        <Route
          path="/apartments"
          element={<Apartments onRouteChange={setHomePage} />}
        />
        <Route
          path="/apartments/:id"
          element={<Booking onRouteChange={setHomePage} />}
        />
        <Route
          path="/checkOut/:id"
          element={<CheckOut onRouteChange={setHomePage} />}
        />
      </Routes>
      <Footer homePage={homePage} />
    </div>
  );
}

export default App;
