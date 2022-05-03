import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Layout</Link>
          </li>
          <li>
            <Link to="/MovieDb">Movies Db</Link>
          </li>
          <li>
            <Link to="/cardgame">Card Game</Link>
          </li>
          <li>
            <Link to="/toss">Toss Game</Link>
          </li>


        </ul>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;