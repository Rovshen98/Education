import React, { Component } from 'react';
import Header from '../Components/Basic/Header';
import Main from '../Components/Programs/Main';
import EFooter from "../Components/Education/EFooter";

class Programs extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Main />
                </main>
                <EFooter/>
            </div>
        )
    }
}

export default Programs;