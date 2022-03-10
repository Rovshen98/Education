import React, { Component } from 'react';
import Header from '../Components/Basic/Header';
import Banner from '../Components/Home/Banner';
import Action from '../Components/Home/Action';
import AboutEducation from '../Components/Home/AboutEducation';
import Achievements from '../Components/Home/Achievements';
import MemberShip from '../Components/Home/MemberShip';
import Question from '../Components/Home/Question';
import Footer from '../Components/Basic/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className='block pb-[50px]'>
          <Banner />
          <Action />
          <AboutEducation />
          <Achievements />
          <MemberShip />
          <Question />
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home;