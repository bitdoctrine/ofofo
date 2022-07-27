import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdKeyboardBackspace } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const { signout } = useAuthentication();
  const { user } = useAuthContext();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="flex justify-between p-3 text-center  relative bg-blue-100">
      <h1 className="title-text text-blue-800 text-3xl">ofófó</h1>
      <ul className={'nav-bar flex font-extrabold'}>
        <li className="mr-4 p-1 rounded-sm bg-gradient-to-bl from-blue-500 to-blue-200 text-white cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-4 p-1 rounded-sm text-gradient-to-bl from-blue-500 to-blue-200  cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
          <Link to="/login">Login</Link>
        </li>
        <li className="mr-4 p-1 rounded-sm bg-gradient-to-bl from-blue-500 to-blue-200 text-white cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
          <Link to="/signup">Signup</Link>
        </li>
        <li
          className="mr-4 p-1 rounded-sm bg-gradient-to-bl from-slate-500 to-gray-400 text-white cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          onClick={signout}
        >
          Logout
        </li>
      </ul>
      {!menu && (
        <motion.div
          onClick={handleMenu}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
          className="lg:hidden md:hidden w-8 h-8 bg-blue-400 rounded-lg cursor-pointer"
        >
          <RiMenu3Fill className="text-white w-full h-full" />
        </motion.div>
      )}

      {menu && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: '50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '0%' }}
            className="menu bg-blue-500 rounded-lg text-white absolute top-0 right-0 w-[368px] h-[98vh] flex flex-col"
          >
            <div className="menu-container  flex justify-between p-1 w-full">
              <motion.div
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1 }}
                className=" w-8 h-8 bg-blue-400 rounded-lg cursor-pointer"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <MdKeyboardBackspace className="text-white w-full h-full" />
              </motion.div>
              <p className="text-blue-200 text-lg">Ofofo</p>
            </div>
            <div className="menu-nav bg-blue-400 text-left p-1">
              <ul className="menu-nav-container flex flex-col gap-4">
                <li className="menu-nav-link  transition-all ease-in-out duration-500 hover:bg-white w-full hover:text-blue-400 rounded-lg p-1">
                  <NavLink
                    to="/"
                    className="text-2xl  transition-all ease-in-out duration-500 w-full"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-nav-link  transition-all ease-in-out duration-500 hover:bg-white w-full hover:text-blue-400 rounded-lg p-1">
                  <NavLink
                    to="/signup"
                    className="text-2xl  transition-all ease-in-out duration-500 w-full"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="menu-nav-link transition-all ease-in-out duration-500 hover:bg-white w-full hover:text-blue-400 rounded-lg p-1">
                  <NavLink
                    to="/login"
                    className="text-2xl  transition-all ease-in-out duration-500 w-full"
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="menu-nav-link">
                  <p className="text-2xl  hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-500 w-full bg-white rounded-lg p-1 text-blue-400">
                    Logout
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  );
}
