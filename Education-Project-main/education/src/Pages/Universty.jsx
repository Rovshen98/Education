import React, { Component } from 'react';
import Header from '../Components/Basic/Header';
import UniverstyMain from '../Components/Universty/UniverstyMain';
import EFooter from '../Components/Education/EFooter';

class Universty extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <UniverstyMain />
                </main>
                <EFooter />
            </div>
        )
    }
}

export default Universty;