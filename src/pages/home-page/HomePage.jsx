import { Link, Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
