import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [background,setbackground] = useState('bg-neutral-700')
  const [textColour,setTextColour] = useState('gray-400')

  const changebackground = ()=>{
      if(background === 'bg-neutral-700')
        {
          setbackground('bg-gray-300')
          setTextColour('black')
  }
      else{
        setbackground('bg-neutral-700')
        setTextColour('gray-400')
      }
  }


  return (
    <>
      <header
        className={`flex w-full h-11 items-center ${background}  dark:bg-dark p-7`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full ">
                <img
                  src="https://www.admedusociety.org/adm.png"
                  width="50px"
                  height="50px"
                  alt="logo"
                  className="hidden dark:block bg-slate-50 rounded-2xl"
                />
                
              </a>
            </div>
            <div className="flex w-full items-center justify-between ">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  
                  <span className={`relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black`}></span>
                  <span className={`relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black`}></span>
                  <span className={`relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black`}></span>
                </button>
                

                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-sm bg-white px-5 py-auto shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  } dark:bg-${background} `}
                >
                  <ul className={`block lg:flex text-${textColour}`}>
                    <ListItem NavLink="/">Home</ListItem>
                    <ListItem NavLink="/#">Photogallery</ListItem>
                    <ListItem NavLink="/#">Internships</ListItem>
                    <ListItem NavLink="/#">Contact-us</ListItem>
                    <ListItem NavLink="/login">Sign-In</ListItem>
                    {/* <ListItem NavLink="/#">Sign-Up</ListItem> */}
                  </ul>
                  
                </nav>
              </div>

              {(open===true) && 
              <div className='text-sm  mt-1'>
             <img
                  src="https://i.postimg.cc/4NsbbWmp/night-mode.png"
                  width="25px"
                  height="25px"
                  alt="logo"
                  className="hidden dark:block bg-slate-50 rounded-2xl"
                  onClick={changebackground}
                />
              </div>
        }

              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary text-gray-400 bg-transparent"
                >
                 <img
                  src="https://i.postimg.cc/4NsbbWmp/night-mode.png"
                  width="25px"
                  height="25px"
                  alt="logo"
                  className="hidden dark:block bg-slate-50 rounded-2xl"
                  onClick={changebackground}
                />
                </a>
                <a
                  href="/login"
                  className={`px-7 py-3 text-base font-medium text-dark hover:text-primary text-${textColour} hover:bg-gray-600 rounded-lg`}
                >
                  Sign in
                </a>

                {/* <a
                  href="/#"
                  className={`rounded-md bg-primary px-7 py-3 text-base font-medium rounded-lg  text-${textColour} hover:bg-gray-600`}
                >
                  Sign Up
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
