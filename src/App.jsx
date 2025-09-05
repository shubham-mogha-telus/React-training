import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/navbar";
import NotFound from "./pages/notFound";

// lazy loading
const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/services"));
const Contact = lazy(() => import("./pages/contact"));
const Profile = lazy(() => import("./pages/profile"));

function App() {
  return (
    <div>
      <h3>Routing in React JS</h3>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={
              <Suspense fallback={<h2>Loading Services.....</h2>}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<h2>Loading Profile.....</h2>}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h2>Loading Contact.....</h2>}>
                <Contact />
              </Suspense>
            }
          />
          {/* <Route path="/not-found" element={<NotFound/>} />  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
