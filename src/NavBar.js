import React from "react";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import plan from "./images/icon-planning.svg";

function NavBar() {
  return (
    <nav className=" py-4  font-Epilogue     ">
      <div className="flex justify-between w-[100%] ">
        <div className="flex gap-3">
          <img src={logo} alt="" />
          <ul className="relative hidden md:block">
            <li>
              <a href="">Features</a>
              <div className="bg-AlmostWhite shadow-lg flex flex-col gap-4 absolute right-2 top-10 p-5 w-[180px] h-[180px]  ">
                <ul className="flex flex-col gap-2">
                  <li>
                    {" "}
                    <div className="flex gap-2 items-center">
                      <img src={todo} alt="" />
                      <h2>Todo List</h2>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="flex gap-2 items-center">
                      <img src={calendar} alt="" />
                      <h2>Calendar</h2>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="flex gap-2 items-center">
                      <img src={reminder} alt="" />
                      <h2>Reminders</h2>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="flex gap-2 items-center">
                      <img src={plan} alt="" />
                      <h2>Planning</h2>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <button className=" md:hidden">
          <img src={menu} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
