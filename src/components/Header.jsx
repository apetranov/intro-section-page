"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MenuIcon,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Header() {
  const [featuresActive, setFeaturesActive] = useState(false);
  const [companyActive, setCompanyActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-5 flex flex-row justify-center items-center">
      <div className="mr-auto flex flex-row justify-center items-center">
        <h1 className="text-3xl mr-10 font-bold">snap</h1>
        <div className="space-x-10 hidden md:flex flex-row juistify-center items-center">
          <DropdownMenu onOpenChange={(open) => setFeaturesActive(open)}>
            <DropdownMenuTrigger asChild>
              <button className="bg-white flex flex-row justify-center items-center space-x-3 outline-white outline outline-0">
                {featuresActive ? (
                  <span className="text-black">Features</span>
                ) : (
                  <span className="text-gray-500 hover:text-black">
                    Features
                  </span>
                )}

                {!featuresActive ? (
                  <img src="images/icon-arrow-down.svg" alt="" />
                ) : (
                  <img src="images/icon-arrow-up.svg" alt="" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-5 shadow-2xl">
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="space-x-4">
                  <img src="images/icon-todo.svg" alt="" />
                  <p>Todo List</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-4">
                  <img src="images/icon-calendar.svg" alt="" />
                  <p>Calendar</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-4">
                  <img src="images/icon-reminders.svg" alt="" />
                  <p>Reminders</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-4">
                  <img src="images/icon-planning.svg" alt="" />
                  <p>Planning</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu onOpenChange={(open) => setCompanyActive(open)}>
            <DropdownMenuTrigger asChild>
              <button className="bg-white flex flex-row justify-center items-center space-x-3 outline-white outline outline-0">
                {companyActive ? (
                  <span className="text-black">Company</span>
                ) : (
                  <span className="text-gray-500 hover:text-black">
                    Company
                  </span>
                )}

                {!companyActive ? (
                  <img src="images/icon-arrow-down.svg" alt="" />
                ) : (
                  <img src="images/icon-arrow-up.svg" alt="" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32 p-5 shadow-2xl">
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="space-x-4">
                  <p>History</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-4">
                  <p>Our Team</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-4">
                  <p>Blog</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-gray-500 hover:text-black">Careers</button>
          <button className="text-gray-500 hover:text-black">About</button>
        </div>
      </div>
      <div className="space-x-5 hidden md:flex">
        <button className="text-gray-500 hover:text-black">Login</button>
        <button className=" text-gray-500 hover:text-black outline p-2 outline-2 outline-black rounded-xl">
          Register
        </button>
      </div>
      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            // Perform actions when the sheet is closed
            setFeaturesActive(false);
            setCompanyActive(false);
          }
          setIsOpen(open); // Update the state
        }}
      >
        <SheetTrigger className="md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-5">
            <div className="flex space-y-10 flex-col mr-auto">
              <button
                onClick={() => setFeaturesActive(!featuresActive)}
                className="bg-white flex flex-row items-center space-x-3"
              >
                {featuresActive ? (
                  <span className="text-black">Features</span>
                ) : (
                  <span className="text-gray-500 hover:text-black">
                    Features
                  </span>
                )}

                {!featuresActive ? (
                  <img
                    className="ml-auto"
                    src="images/icon-arrow-down.svg"
                    alt=""
                  />
                ) : (
                  <img
                    className="ml-auto"
                    src="images/icon-arrow-up.svg"
                    alt=""
                  />
                )}
              </button>
              {featuresActive ? (
                <div className="flex flex-col space-y-5 pl-5">
                  <div className="flex hover:cursor-pointer flex-row  space-x-3">
                    <img src="images/icon-todo.svg" alt="" />
                    <p>Todo List</p>
                  </div>
                  <div className="flex hover:cursor-pointer flex-row  space-x-3">
                    <img src="images/icon-calendar.svg" alt="" />
                    <p>Calendar</p>
                  </div>
                  <div className="flex hover:cursor-pointer flex-row r space-x-3">
                    <img src="images/icon-reminders.svg" alt="" />
                    <p>Reminders</p>
                  </div>
                  <div className="flex hover:cursor-pointer flex-row  space-x-3">
                    <img src="images/icon-planning.svg" alt="" />
                    <p>Planning</p>
                  </div>
                </div>
              ) : null}

              <button
                onClick={() => setCompanyActive(!companyActive)}
                className="bg-white flex flex-row items-center space-x-3"
              >
                {companyActive ? (
                  <span className="text-black">Company</span>
                ) : (
                  <span className="text-gray-500 hover:text-black">
                    Company
                  </span>
                )}

                {!companyActive ? (
                  <img
                    className="ml-auto"
                    src="images/icon-arrow-down.svg"
                    alt=""
                  />
                ) : (
                  <img
                    className="ml-auto"
                    src="images/icon-arrow-up.svg"
                    alt=""
                  />
                )}
              </button>
              {companyActive ? (
                <div className="flex flex-col space-y-5 pl-5">
                  <div className="flex hover:cursor-pointer flex-row space-x-3">
                    <p>History</p>
                  </div>
                  <div className="flex hover:cursor-pointer flex-row  space-x-3">
                    <p>Our Team</p>
                  </div>
                  <div className="flex hover:cursor-pointer flex-row space-x-3">
                    <p>Blog</p>
                  </div>
                </div>
              ) : null}
              <button className="text-gray-500 text-left hover:text-black">
                Careers
              </button>
              <button className="text-gray-500 text-left hover:text-black">
                About
              </button>
            </div>
          </div>
          <div className="space-x-5 my-10 space-y-5 flex flex-col">
            <button className="text-gray-500 hover:text-black">Login</button>
            <button className=" text-gray-500 hover:text-black outline p-2 outline-2 outline-black rounded-xl">
              Register
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
