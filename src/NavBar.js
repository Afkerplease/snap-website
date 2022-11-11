import React, { useState } from "react";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import plan from "./images/icon-planning.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import arrowUp from "./images/icon-arrow-up.svg";

function NavBar({ clickFunction }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedCompany, setIsClickedCompany] = useState(false);
  const handleClick = (e) => {
    setIsClicked(!isClicked);
    e.preventDefault();
  };
  const handleClickCompany = (e) => {
    setIsClickedCompany(!isClickedCompany);
    e.preventDefault();
  };
  return (
    <nav className=" py-4 px-2  flex items-center font-Epilogue  text-MediumGray    ">
      <img src={logo} alt="" />
      <div className="flex justify-between w-[100%]  ">
        <div className="flex gap-3">
          <ul className="relative ml-10 md:flex md:items-center gap-10 hidden ">
            <li>
              <a className=" text-AlmostBlack" onClick={handleClick} href="">
                Features{" "}
                {isClicked ? (
                  <span onClick={handleClick} className="inline-block">
                    <img src={arrowUp} alt="" />
                  </span>
                ) : (
                  <span onClick={handleClick} className="inline-block">
                    <img src={arrowDown} alt="" />
                  </span>
                )}
              </a>
              {isClicked && (
                <div className="bg-AlmostWhite rounded-[10px] shadow-lg flex flex-col gap-4 absolute right-[80%] top-10 p-5 w-[180px] h-[180px]  ">
                  <ul className="flex flex-col gap-2">
                    <li>
                      {" "}
                      <div className="flex gap-2 items-center">
                        <img src={todo} alt="" />
                        <a href="#">Todo List</a>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="flex gap-2 items-center">
                        <img src={calendar} alt="" />
                        <a href="#">Calendar</a>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="flex gap-2 items-center">
                        <img src={reminder} alt="" />
                        <a href="#">Reminders</a>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="flex gap-2 items-center">
                        <img src={plan} alt="" />
                        <a href="#">Planning</a>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                className=" hover:text-AlmostBlack"
                onClick={handleClickCompany}
                href="#"
              >
                Company{" "}
                {isClickedCompany ? (
                  <span onClick={handleClickCompany} className="inline-block">
                    <img src={arrowUp} alt="" />
                  </span>
                ) : (
                  <span onClick={handleClickCompany} className="inline-block">
                    <img src={arrowDown} alt="" />
                  </span>
                )}
              </a>
              {isClickedCompany && (
                <div className="absolute bg-AlmostWhite p-4 shadow-lg top-10 right-[40%] rounded-[10px] h-[120px] w-[120px]">
                  <ul className="flex flex-col gap-2 text-MediumGray  ">
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a className=" hover:text-AlmostBlack" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className=" hover:text-AlmostBlack" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex h-[50px] text-MediumGray hidden gap-8 items-center">
          <h3 className=" cursor-pointer hover:text-AlmostBlack ">Login</h3>
          <button className=" border-2 hover:text-AlmostBlack border-MediumGray px-4 py-2 rounded-[15px]  ">
            Register
          </button>
        </div>
        <button
          onClick={() => {
            clickFunction();
          }}
          className=" md:hidden"
        >
          <img src={menu} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
