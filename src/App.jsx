import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from './components/City';
import Form from './components/Form';
import { CitiesProvider } from "./contexts/CitiesContext";

const BASE_URL = "http://localhost:8000";

function App() {
  

  return (
    <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/app" element={<AppLayout></AppLayout>}>
          <Route index element={<Navigate replace to="cities"></Navigate>}></Route>
          <Route path="cities" element={<CityList />}></Route>
          <Route path="cities/:id" element={<City></City>}></Route>
          <Route path="countries" element={<CountryList />}></Route>
          <Route path="form" element={<Form></Form>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
