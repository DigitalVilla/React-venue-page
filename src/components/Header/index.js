import React from 'react'
import Carrousel from './Carousel'
import Countdown from './Countdown'
import Title from './Title'

const Header = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carrousel />
            <Title />
            <Countdown />
        </div>
    )
}

export default Header;
