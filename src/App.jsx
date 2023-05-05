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
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="todo" element={<TodoPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
