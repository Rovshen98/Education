import React, { Component } from 'react';
import AccommodationItem from './AccommodationItem';

class AccommodationTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ac_data: [
        {
          id: 1,
          text: "BAU & My House (Evim) Student Dormitories",
        },
      ],
      activeTab: -1
    }
  }

  activateTab = (index) => {
    this.setState(prev => ({
      activeTab: prev.activeTab === index ? -1 : index
    }));
  }

  render() {
    const { activeTab } = this.state;
    const { ac_data } = this.state;
    return (
      <div className='block'>
        <div className="block w-full box-border mb-[50px]">
          <div className="block">
            <div className="bg-white my-[30px] pt-[10px] px-[35px] pb-[35px] pl-[35px] rounded-md shadow-[0_0px_24px_0_rgb(0_0_0/2%),0px_20px_24px_0_rgb(0_0_0/2%)]">
              <div className="block w-full">
                {
                  ac_data.map((w, index) => {
                    return (
                      <AccommodationItem key={w.id} activeTab={activeTab} index={index} {...w} activateTab={() => this.activateTab(index)} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccommodationTab;