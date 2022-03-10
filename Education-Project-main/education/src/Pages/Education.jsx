import React, { Component } from 'react';
import Header from "../Components/Basic/Header";
import Banner from '../Components/Education/Banner';
import Actions from '../Components/Education/Actions';
import Modal from '../Components/Education/Modal';
import Article from '../Components/Education/Article';
import FairEvents from '../Components/Education/FairEvents';
import EFooter from "../Components/Education/EFooter";
import Footer from '../Components/Basic/Footer';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  openModal = () => {
    this.setState({
      isVisible: true
    })
  }

  closeModal = () => {
    this.setState({
      isVisible: false
    })
  }

  render() {
    const { isVisible } = this.state
    return (
      <div>
        <Header openModal={() => this.openModal} />
        <main className='block pb-[50px]'>
          <Banner />
          <Actions />
          <Article />
          <FairEvents />
        </main>
        {isVisible && <Modal closeModal={() => this.closeModal} />}
        <EFooter />
      </div>
    )
  }
}


export default Education