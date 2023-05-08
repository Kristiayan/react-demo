import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/error-page/ErrorPage.jsx";
import { HomePage } from "./pages/home-page/HomePage.jsx";
import { TodoPage } from "./pages/todo-page/TodoPage.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="react-demo/" element={<HomePage />} />
          <Route path="react-demo/todo" element={<TodoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
