import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/product" element={<Product></Product>}></Route>
      <Route path="/pricing" element={<Pricing></Pricing>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/app" element={<AppLayout></AppLayout>}>
        <Route index element={<p>List of cities</p>}></Route>
        <Route path="cities" element={<p>List of cities</p>}></Route>
        <Route path="countries" element={<p>List of countries</p>}></Route>
        <Route path="form" element={<p>Form</p>}></Route>
      </Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
