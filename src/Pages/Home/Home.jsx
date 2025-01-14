import React from 'react';
import Cover from './Cover/Cover';
import Infocard from './Infocard/Infocard';
import Popular from '../../Item/Popuplar/Popular';

const Home = () => {
    return (
        <div className='mb-5'>
            <Cover></Cover>
            <Infocard></Infocard>
            <Popular></Popular>
        </div>
    );
};

export default Home;