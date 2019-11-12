import React, {useState, useRef} from "react";

const logo = {
    textAlign: 'center',
    margin: '43px 0 66px',
};

const subMenu = {
    borderBottom: '1px solid #515151',
    display: 'inline-block',
    color: '#f2f2f2',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '19px',
    lineHeight: '24px',
    width: '152px',
    paddingBottom: '10px',
    position: 'relative',
    paddingLeft: '37px',
    boxSizing: 'border-box',
};

const listStyle = {
    listStyleType:'none',
    color: '#9c9c9c',
    fontWeight: '700',
    fontSize: '14px',
    border: 0,
    display: 'inline-block',
    padding: 0,
    width: '108px',
    verticalAlign: 'top',
};


const menuTitle = ['상품안내', '온라인 예약/충전', '고객 혜택', '고객센터'];


const SideBar = () => {

    return (
        <>
            <h1 style={logo}>
                <a href="#">
                    <img src="https://roaming.kt.com/rental/_ui/images/common/logo.png" alt=""/>
                </a>
            </h1>
            <div style={subMenu}>상품안내</div>
            <ul style={listStyle}>
                <li>Prepaid SIM</li>
                <li>Prepaid SIM</li>
                <li>Prepaid SIM</li>
                <li>Prepaid SIM</li>
            </ul>
        </>
    )

};

export default SideBar;