import React, { useState } from "react";
import closeMenu from "./images/icon-close-menu.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminder from "./images/icon-reminders.svg";
import plan from "./images/icon-planning.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import arrowUp from "./images/icon-arrow-up.svg";

function Overlay({ clickFunction }) {
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
    <main className=" w-[375px] relative md:hidden ">
      <div className="bg-black  w-[375px] h-[800px] absolute  opacity-[0.5] "></div>
      <div className=" bg-white py-4 px-2 flex flex-col text-MediumGray  w-[250px] h-[800px] right-0  absolute top-0  ">
        <button
          onClick={() => {
            clickFunction();
          }}
          className="  self-end  "
        >
          <img src={closeMenu} className="h-8" alt="" />{" "}
        </button>
        <div className=" flex flex-col ">
          <ul className=" ml-5 mt-20 flex flex-col  gap-6 text-MediumGray  ">
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
                <div className="bg-white  flex flex-col gap-4   p-5 w-[180px] h-[180px]  ">
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
                <div className=" bg-white p-4  top-10   h-[120px] w-[120px]">
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
          <div className="flex  flex-col text-MediumGray  gap-4 mt-8 items-center">
            <h3 className=" cursor-pointer hover:text-AlmostBlack ">Login</h3>
            <button className=" border-2 hover:text-AlmostBlack border-MediumGray px-20 py-2 rounded-[15px]  ">
              Register
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overlay;
