import React from 'react';
import { Link } from 'react-router-dom';
import "..//..//css/main.css";
import { selectNavbar } from '../../redux/reducers/navbarSlice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Header({openModal}) {
  const datas = useSelector(selectNavbar);
  const location = useLocation();
  return (
    <header className='block relative z-50'>
      <div className="">
        <div className="px-[30px] bg-[#2595b3] text-white text-xs">
          <div className="flex max-w-[1170px] px-0 justify-between items-center mx-auto">
            <div className="mr-0 flex-grow">
              <nav>
                <ul className='flex m-0 p-0 list-none'>
                  <li className='border-l-0 relative header__lang'>
                    <Link to="/en" className="h-11 flex items-center relative px-[13px] text-[#fff]">
                      <span>
                        <img className='max-w-full inline h-auto' src="/images/en.png" alt="English" />
                      </span>
                    </Link>
                    <ul className='block absolute bg-white border border-solid border-[#e5e5e5] header__lang__item left-[-1] z-[1] invisible opacity-0 transition-opacity rounded-b-sm'>
                      <li className='relative'>
                        <Link to="/" className='text-left border-b-0 text-[#747474] block py-[7px] px-[10px] leading-normal transition-colors'>
                          <span>
                            <img className='max-w-full inline h-auto' src="/images/ar.png" alt="Arab" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='border-l border-solid border-[#fff] relative'>
                    <Link to="/en/contact/" className='h-11 flex items-center relative px-[13px] text-[#fff] hover:underline'>
                      <span>Contact us</span>
                    </Link>
                  </li>
                  <li className='border-l border-solid border-[#fff] relative'>
                    <Link to="/en/application-status-checker/" className='h-11 flex items-center relative px-[13px] text-[#fff] hover:underline'>
                      <span>Application Status</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-0 flex-grow text-right">
              <div className="block leading-[44px]">
                <span>Turkey: 4448331 | International: 00905495258000</span>
                <span className='inline-block px-[6px]'>|</span>
                <span>
                  <Link to="mailto:contact@oktamam.com" className='text-white hover:underline'>contact@oktamam.com</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="bg-[#fff] border-b border-solid border-[#e5e5e5]">
            <div className="max-w-[1170px] mx-auto p-0">
              <div className="block max-w-full my-[25px] text-center">
                <Link to="/" className='inline-block max-w-full'>
                  <img src="/images/logo.png" alt="Main Logo" className='w-auto h-auto max-h-[90px]' />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white px-[30px] border-b border-solid border-transparent">
            <div className=" max-w-[1170px] mx-auto px-0">
              <nav className="relative z-[200] overflow-hidden h-20 text-center">
                <ul className='flex flex-wrap items-center justify-center m-0 p-0 list-none'>
                  {
                    datas.map((data) => {
                      return (
                        <li key={data.id} className='relative m-0 p-0 cursor-pointer pr-[30px]'>
                          <Link to={data.href} className='flex justify-center items-center leading-[1] border-t-[3px] border-solid border-transparent h-20 text-center text-[#474747] text-[15px] font-bold hover:underline hover:text-[#2595b3] transition-colors'>
                            <span>{data.title}</span>
                            <span className='inline-block w-auto transition-colors pl-[0.5em]'>
                              <i className={data.icon}></i>
                            </span>
                          </Link>
                        </li>
                      )
                    })
                  }
                  {
                    location.pathname === "/education-services/" ? <div className="relative cursor-pointer right-[0px] text-right text-[#656f7b]" onClick={openModal()}>
                      <span className='w-10 h-10 relative overflow-hidden inline-flex justify-center items-center p-0 bg-[#f2f2f2] text-[#4cadc9] rounded-[5px]'>
                        <i class="fa-solid fa-bars text-2xl"></i>
                      </span>
                    </div> : null
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;