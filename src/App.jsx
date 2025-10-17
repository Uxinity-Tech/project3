import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/index";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={AppRoutes} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
