import React, { Component } from 'react';
import Header from '../Components/Basic/Header';
import EFooter from '../Components/Education/EFooter';
import EventsButton from '../Components/Events/EventsButton';
import EventsItem from '../Components/Events/EventsItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "../css/main.css"

class Events extends Component {
  render() {
    const { eventDatas } = this.props;
    return (
      <>
        <Header />
        <main className='block'>
          <div className='block w-full box-border bg-[#f9fafe] border-t border-solid border-[#eaeaea]'>
            <div className="max-w-[1140px] mx-auto px-[15px] relative">
              <div className="flex items-center justify-between mb-[25px]">
                <h2 className='text-center w-full my-5 text-[25px] leading-8 text-[#20343b] font-normal'>
                  Upcoming
                  <span className='text-[#2595b3] ml-2'>Events</span>
                </h2>
              </div>
              <div className="px-[30px] relative">
                <div className="rounded-[10px] shadow-[0px_0px_10px_3px_rgb(255_0_0/20%)] event_bg_image h-[400px] bg-no-repeat bg-cover">
                  <div className="flex w-full h-full relative z-[1]">
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(37,148,179,.8)] rounded-[10px]"></div>
                    <div className="w-full">
                      <div className="absolute right-[3%] text-center w-[70px] h-[100px] bg-white rounded-b-[5px]">
                        <span className='absolute block bg-white font-medium w-full text-center'>
                          <i class="uil uil-usd-circle text-[40px] text-[#2595b3] relative left-[2px] top-[10px]"></i>
                          <span className='block uppercase font-medium text-sm'>Free Entry</span>
                        </span>
                      </div>
                      <div className="flex h-full items-center flex-nowrap mx-[-15px]">
                        <div className="flex flex-col relative flex-[0_0_41%] left-20 max-w-full">
                          <Link to="" className='fair__events__link relative w-full flex items-center justify-center overflow-hidden rounded-[10px]'>
                            <img src="/images/baku-en_0.png" className='w-full h-auto scale-[1] transition-all duration-500' alt="Event 1" />
                          </Link>
                          <div className="relative top-[15px] left-[30px]">
                            <span className='text-white'>
                              <i class="fa-solid fa-location-dot inline-block w-[1em] text-center relative right-[10px]"></i>
                              Baku,
                            </span>
                            <span className='font-light text-white'>Hilton Hotel </span>
                          </div>
                        </div>
                        <div className="flex h-[270px] pl-[100px] flex-[0_0_51%] z-10">
                          <div className="p-[10px] h-[105px] rounded-[5px] bg-[rgba(255,255,255,.3)]">
                            <span className='block text-center w-[60px] text-[23px] text-white border-b border-solid border-[rgba(255,255,255,0.2)]'>03</span>
                            <div className="">
                              <span className='pt-2 text-base text-white block text-center'>Apr</span>
                              <span className='text-base block text-center text-white'>2022</span>
                            </div>
                          </div>
                          <div className="pl-[50px] pr-[10%]">
                            <h2 className='text-[25px] font-normal text-white mt-0 mb-5'>
                              <Link to="/events/turkish-universities-fair-baku-azerbaijan" className="text-white font-medium">Turkish Universities Fair in Baku - Azerbaijan</Link>
                            </h2>
                            <p className='text-[15px] leading-5 text-white font-thin my-[15px]'>Turkish Universities Fair in Baku - Azerbaijan</p>
                            <div className="text-white">
                              <i class="fa-solid fa-clock mr-[10px]"></i>
                              <span className='text-white text-sm font-normal'>11:00 -</span>
                              <span className='text-white text-sm font-normal'> 18:00 </span>
                            </div>
                            <Link to="" className="bg-white my-[15px] mx-0 text-[#2595b3] flex items-center w-[fit-content] relative py-[18px] px-[30px] rounded-[5px] transition-all">
                              LEARN MORE
                              <i class="fa-solid fa-chevron-right text-[14px] relative left-[10px] transition-all text-[#2595b3]"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="mx-auto px-[15px] text-center mt-[30px]">
                  <div className="grid grid-cols-3 mx-[-15px]">
                    <EventsButton text="All Events" link="all-events" />
                    <EventsButton text="Upcoming Events" link="upcoming-events" />
                    <EventsButton text="Passed Events" link="passed-events" />
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="relative mt-[10px] pt-[5px]">
                  <div className="grid grid-cols-3">
                    {
                      eventDatas.map((item) => {
                        return (
                          <EventsItem key={item.id} {...item} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <EFooter />
      </>
    )
  }
}

function mapStateToProps(state) {
  const eventDatas = state.events.eventsData;
  return {
    eventDatas
  }
}

export default connect(mapStateToProps)(Events);