import Cart from "./Cart";
import Profile from "./Profile";
import {FC} from "react";



const Navbar:FC = () => {
  return (
    <div className="h-40">
      <div className="flex justify-center">
        <div className="w-5/6 my-5 fixed">
          <div className="navbar bg-white rounded-box">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Pizzeria</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <Cart />
              </div>
              <div className="dropdown dropdown-end">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
