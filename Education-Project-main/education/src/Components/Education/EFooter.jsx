import React from 'react';
import { Link } from 'react-router-dom';

function EFooter() {
  return (
    <footer className='block w-full py-5 pt-[50px] bg-[#f9fafe] border-t border-solid border-[#acabb0]'>
      <div className="max-w-[1140px] mx-auto px-[15px]">
        <div className="block mx-[-15px]">
          <div className="grid grid-cols-2 border-b border-solid border-[#acabb0]">
            <div className="w-full px-[15px]">
              <div className="flex mb-5">
                <div className="block text-center w-[100px] h-[100px]">
                  <i class="fa-solid fa-mobile-screen-button text-5xl text-[#777070]"></i>
                </div>
                <div className="block pl-[30px]">
                  <h3 className='text-[15px] text-[#656f7b] font-normal mb-5'>QUICK APPLICATION</h3>
                  <p className='text-[13px] leading-4 text-[#acabb0]'>
                    Quick Application puts you in control, minimizing the number of fields you need to fill out versus a standard application.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-[15px]">
              <div className="flex mb-5">
                <div className="block text-center w-[100px] h-[100px]">
                  <i class="fa-solid fa-headset text-5xl text-[#777070]"></i>
                </div>
                <div className="block pl-[30px]">
                  <h3 className='text-[15px] text-[#656f7b] font-normal mb-5'>7/24 SUPPORT</h3>
                  <p className='text-[13px] leading-4 text-[#acabb0]'>
                    You can use 7/24 live support service. You may contact us both on our web page and through social media in order to get answers to your application process and questions as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-[-15px] pt-[45px] pb-[55px] border-b border-solid border-[#acabb0]">
          <div className="w-full px-[15px]">
            <div className="block">
              <div className="w-auto h-[70px]">
                <img src="/images/footer-logo.png" className='object-cover max-w-full' alt="Footer Logo" />
              </div>
              <Link to="/sites/default/files/" className="font-normal text-sm text-[#20343b] transition-all">
                <b className='font-bold'>Personal Data Protection Law</b>
              </Link>
            </div>
            <div className="block">
              <ul className='flex flex-row justify-start w-full gap-3 pl-0 pt-[25px]'>
                <li>
                  <Link to="/facebook" className="flex justify-center items-center font-normal text-sm text-[#acabb0] w-8 h-8 transition-all bg-white p-[11px] rounded-[50%] hover:bg-[#4262c8] hover:text-white hover:transition-colors">
                    <i class="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/facebook" className="flex justify-center items-center font-normal text-sm text-[#acabb0] w-8 h-8 transition-all bg-white p-[11px] rounded-[50%] hover:bg-[#f59435] hover:text-white hover:transition-colors">
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/facebook" className="flex justify-center items-center font-normal text-sm text-[#acabb0] w-8 h-8 transition-all bg-white p-[11px] rounded-[50%] hover:bg-[#ff0000] hover:text-white hover:transition-colors">
                    <i class="fa-brands fa-youtube"></i>
                  </Link>
                </li><li>
                  <Link to="/facebook" className="flex justify-center items-center font-normal text-sm text-[#acabb0] w-8 h-8 transition-all bg-white p-[11px] rounded-[50%] hover:bg-[#0088cc] hover:text-white hover:transition-colors">
                    <i class="fa-brands fa-telegram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-[15px]">
            <nav className='block top-0'>
              <ul className='flex ml-0 justify-around p-0'>
                <li className='block pt-[0.4em]'>
                  <Link to="" className="font-medium text-[#2595b3] text-sm transition-all">Trucas</Link>
                  <ul className='ml-0 pt-[1rem]'>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>About Us</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Services</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>F.A.Q</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className='block pt-[0.4em]'>
                  <Link to="" className="font-medium text-[#2595b3] text-sm transition-all">Promotion</Link>
                  <ul className='ml-0 pt-[1rem]'>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>How it works ?</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Promotion Movie</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full px-[15px]">
            <nav className='block top-0'>
              <ul className='flex ml-0 justify-around p-0'>
                <li className='block pt-[0.4em]'>
                  <Link to="" className="font-medium text-[#2595b3] hidden text-sm transition-all">Trucas</Link>
                  <ul className='ml-0 pt-[1rem]'>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Universities</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Programs</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Fairs - Events</Link>
                    </li>
                  </ul>
                </li>
                <li className='block pt-[0.4em]'>
                  <Link to="" className="font-medium text-[#2595b3] text-sm hidden transition-all">Promotion</Link>
                  <ul className='ml-0 pt-[1rem]'>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Privacy Policy</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>Cookie Policy</Link>
                    </li>
                    <li className='block pt-[0.4em] m-0'>
                      <Link to="" className='text-[#acabb0] font-normal text-sm transition-all hover:text-[#2595b3]'>User Agreement</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full">
            <div className="flex items-center justify-between pt-5">
              <p className='text-sm font-light text-[#656f7b]'>© 2020 TRUCAS. All Rights Reserved.</p>
              <img className='w-[10px]' src="/images/footer-right-bottom.png" alt="Footer Right Bottom" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EFooter;