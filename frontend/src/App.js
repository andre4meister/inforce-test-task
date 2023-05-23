import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ListProductsProvider from "./pages/ListProductsView/ListProductsProvider";
import NotFoundPage from "./pages/NotFoundView/NotFoundView";
import MainLayout from "./pages/Layout/Layout";
import ProductViewProvider from "./pages/ProductView/ProductViewProvider";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<ListProductsProvider />} />
            <Route path="/products" element={<ListProductsProvider />} />
            <Route path="/product/:id" element={<ProductViewProvider />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>,
    ),
);
function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
