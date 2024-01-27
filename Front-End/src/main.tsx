import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import socket from "./Socket.tsx";
import { NotificationProvider } from "./context/NotificationProvider.tsx";
import Navbar from "./components/Navbar.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";

import './styles/About.css'
import './styles/Library.css'
import './styles/Home.css'
import './styles/myBooks.css'
import About from "./pages/About.tsx";
import Library from "./pages/Library.tsx";
import BookTable from "./components/BookTable.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <NotificationProvider />
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/library" element={<Library></Library>}></Route>
        <Route path="/book-table" element={<BookTable></BookTable>}></Route>
      </Routes>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home>
      <About></About>
      <Library></Library>
      <BookTable></BookTable> */}
    </AuthProvider>
  </BrowserRouter>
);
