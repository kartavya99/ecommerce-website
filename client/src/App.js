import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <Products />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
