import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Categories from "../pages/Categories";
import Deals from "../pages/Deals";
import Brand from "../pages/Brand";
import Wishlist from "../components/Wishlist"; // Assuming moved to pages folder
import CategoryPage from "../pages/CategoryPage";
import BrandsPage from "../pages/BrandsPage";
import BrandPage from "../pages/BrandPage";
import ProductD from "../pages/ProductD";
// import Category from "../pages/Category";
// import ProductPage from "../pages/ProductPage";
// Optional: ProtectedRoute wrapper
import { AuthContext } from "../context/AuthContext";
import React from "react";
import ProductDetailss from "../pages/ProductD";

const ProtectedRoute = ({ children: Element }) => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) =>
        isAuthenticated ? Element : <Navigate to="/login" replace state={{ from: window.location.pathname }} />
      }
    </AuthContext.Consumer>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
       { path: "/products/:id", element: <ProductDetails /> },
      { path: "/categories", element: <Categories /> },
      {path: "/category/:id", element: <CategoryPage /> },
      // { path: "/category/:id", element: <Category /> },
      { path: "/product/:id", element: <ProductDetails /> },
      // { path: "/product/:id", element: <ProductPage /> },
      { path: "/products/:id", element: <ProductD /> },
      { path: "/brands/:id", element: <Brand /> },
      { path:"/brands", element:<BrandsPage />},
      { path:"/brand/:id",element:<BrandPage />},

      { path: "/deals", element: <Deals /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
      { path: "/wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute> }, // Fixed typo
      { path: "/orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
      { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);

export default router;