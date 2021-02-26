import React from 'react';
import TitleContainer from '../title/TitleContainer';
import FieldContainer from '../field/FieldContainer';
import DataContainer from '../data/DataContainer';
import './App.scss';

const App = () => {
    return (
        <div className="container">
            <TitleContainer />
            <DataContainer />
            <FieldContainer />
        </div>
    )
}


export default App; 