import { Outlet, Link, NavLink } from "react-router-dom";

/*<li className="p-4 mx-2" >
            <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}  to="/cardgame">Card Game</NavLink>     isActive is provided with navlink based on that */

const Layout = () => {
  return (
    <>
      <nav className=" relative bg-indigo-700 mb-3 text-red-100 flex flex-row justify-between">
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

       
        <button type="button" className="text-gray-500 mr-10" >
                    <svg className="w-6 h-6 fill-current " viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
                </button>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;