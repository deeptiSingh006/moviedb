import { Outlet, Link, NavLink } from "react-router-dom";

/*<li className="p-4 mx-2" >
            <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}  to="/cardgame">Card Game</NavLink>     isActive is provided with navlink based on that */

const Layout = () => {
  return (
    <>
      <nav className=" relative bg-gray-400 mb-3 text-red-100 ">
        <ul  className="relative flex flex-wrap items-center justify-start px-2 py-3 ">
          <li className="p-4 mx-2">
            < NavLink  className={({ isActive }) => (isActive ? "rounded-full border-indigo-500/100 bg-green-500 px-2" : "rounded-full border-indigo-500/100 bg-blue-500 px-2")} to="/">Layout</NavLink>
          </li>
          <li className="p-4 mx-2">
            <NavLink className={({ isActive }) => (isActive ? "rounded-full border-indigo-500/100 bg-green-500 px-2" : "rounded-full border-indigo-500/100 bg-blue-500 px-2")} to="/MovieDb">Movies Db</NavLink>
          </li>
          <li className="p-4 mx-2" >
            <NavLink className={({ isActive }) => (isActive ? "rounded-full border-indigo-500/100 bg-green-500 px-2" : "rounded-full border-indigo-500/100 bg-blue-500 px-2")}  to="/cardgame">Card Game</NavLink>
          </li>
          <li className="p-4 mx-2">
            <NavLink className={({ isActive }) => (isActive ? "rounded-full border-indigo-500/100 bg-green-500 px-2" : "rounded-full border-indigo-500/100 bg-blue-500 px-2")} to="/toss">Toss Game</NavLink>
          </li>


        </ul>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;