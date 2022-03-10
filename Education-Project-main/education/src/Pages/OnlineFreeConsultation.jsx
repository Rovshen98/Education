import React, { Component } from 'react';
import Header from "../Components/Basic/Header";
import EFooter from "../Components/Education/EFooter";

class OnlineFreeConsultation extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='block'>
          <div className="block w-full box-border">
            <div className="max-w-[1140px] mx-auto px-[15px]">
              <div className="flex flex-col-reverse">
                <h2 className='order-1 text-[25px] left-8 text-[#20343b] font-normal my-5'>ONLINE CONSULTATION</h2>
                <div className="block w-full">
                  <form action="">
                    <div className="my-[1em] block w-full">
                      <h3 className='text-xl text-[#656f7b] font-normal my-5'>
                        Application
                        <span className='text-[#2595b3]'> Form</span>
                      </h3>
                    </div>
                    <div className="flex my-[0.5em]">
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-name" className='text-sm font-normal'>
                          Your Name
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <input type="text" name="edit-name" id="edit-name" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-[0.25rem] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' maxLength="255" placeholder='Ex : Jack' required />
                      </div>
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-surname" className='text-sm font-normal'>
                          Your Surname
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <input type="text" name="edit-surname" id="edit-surname" className='block w-full h-[calc(1.5em+0.75rem+2px)] mt-[0.25rem] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' maxLength="255" placeholder='Ex : DOE' required />
                      </div>
                    </div>
                    <div className="flex my-[0.5em]">
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-e-mail" className='text-sm font-normal'>
                          E-Mail Address
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <input type="email" name="e_mail" id="e_mail" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' maxLength="254" placeholder='mail@example.com' required />
                      </div>
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-country" className='text-sm font-normal'>
                          Country
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <select name="country" id="country" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]'>
                          <option value selected>- Select -</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antarctica">Antarctica</option>
                          <option value="Australia">Australia</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex my-[1em] mx-[-0.5em]"></div>
                    <div className="flex my-[0.5em]">
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-day" className='text-sm font-normal'>
                          Select the Day
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <input type="text" name="select_day" id="select_day" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' maxLength="128" placeholder='Select the Day' required />
                      </div>
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-country" className='text-sm font-normal'>
                          Select the Time
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <select name="select_time" id="select_time" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' required>
                          <option value="" selected="selected">- Select -</option>
                          <option value="11:00-11:20">11:00-11:20</option>
                          <option value="11:30:11:50">11:30:11:50</option>
                          <option value="12:00-12:20">12:00-12:20</option>
                          <option value="12:30-12:50">12:30-12:50</option>
                          <option value="13:00-13:20">13:00-13:20</option>
                          <option value="13:30-13:50">13:30-13:50</option>
                          <option value="14:00-14:20">14:00-14:20</option>
                          <option value="14:30-14:50">14:30-14:50</option>
                        </select>
                      </div>
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit-language-consultation" className='text-sm font-normal'>
                          Language of the Consultation
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <select name="language_consultation" id="language_consultation" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' required>
                          <option value="" selected="selected">- Select -</option>
                          <option value="Turkish Language">Turkish Language</option>
                          <option value="English Language">English Language</option>
                          <option value="Russian Language">Russian Language</option>
                          <option value="Arabic Language">Arabic Language</option>
                          <option value="French Language">French Language</option>
                          <option value="German Language">German Language</option>
                          <option value="Persian Language ">Persian Language</option>
                          <option value="Uzbek Language">Uzbek Language</option>
                          <option value="Turkman Language">Turkman Language</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex my-[0.5em]">
                      <div className="flex-[1] mx-[0.5em]">
                        <label htmlFor="edit_select_universty" className='text-sm font-normal'>
                          Select the University that you would like to get the consultation about
                          <i class="fa-solid fa-asterisk inline-block text-[#2595b3] text-[6px] mx-[0.3em] align-super"></i>
                        </label>
                        <select name="select_universty" id="select_universty" className='block w-full h-[calc(1.5em+0.75rem+2px)] py-[0.375rem] px-[0.75rem] outline-none text-base font-normal text-[#495057] border border-solid border-[#ced4da] bg-white rounded-[0.25rem]' required>
                          <option value="" selected="selected">- Select -</option>
                          <option value="3">Beykent University</option>
                          <option value="19">Yasar University</option>
                          <option value="20">Acibadem University</option>
                          <option value="35">Yeditepe University</option>
                          <option value="117">Biruni University</option>
                          <option value="163">Dogus University</option>
                          <option value="172">Kadir Has University</option>
                          <option value="229">Fenerbahce University</option>
                          <option value="284">Istanbul Kultur University</option>
                          <option value="731">Istanbul Aydin University</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex my-[0.5em]">
                      <div className="flex-[1] mx-[0.5em]">
                        <div className="relative flex items-center mr-[0.5em] my-[0.4em] pl-[1.25rem]">
                          <input type="checkbox" name="e_language" id="e_language" className='absolute ml-[-1.25rem] mt-[3px]' />
                          <label htmlFor="e_language" className='font-normal inline mb-0'>I have read and accept the agreement.</label>
                        </div>
                      </div>
                    </div>
                    <div className="my-[1em]">
                      <input type="submit" name="apply_submit" id="apply_submit" value="Apply" className='inline-block text-white transition-all py-3 px-[22px] rounded-[5px] cursor-pointer bg-[#2595b3]' />
                    </div>
                  </form>
                </div>
                <div className="block w-full">
                  <p className='text-base text-[#656f7b] font-light my-4'>You may contact us for scheduling a 20-minutes of video consulting with you for one of your preferred universities. Send your request by filling the below form:</p>
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

export default OnlineFreeConsultation;