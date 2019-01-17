import React from 'react'
import Logo from '../../res/images/img/VlogoW.png'
import Button from '../utils/Button'

const Title = () => {

    return (
        <div className="header_title">
            <img src={Logo} alt="logo" />
            <h1> <span> Omar</span> Villanueva </h1>
            <h2> Developer & Graphic Designer </h2>
            <Button animate={false} value="Profile" link="#" />
        </div>
    )
}

export default Title;
