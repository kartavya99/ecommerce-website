import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
