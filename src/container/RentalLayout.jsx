import React from "react";

import SideBar from '../component/SideBar';
import ContentsArea from "./ContentsArea";

const RentalLayout = () => {

    const wrap = {};

    const wrapper = {
        width: '1000px',
        margin: '0 auto',
        overflow: 'hidden',
    };

    const nav ={
        minHeight: '100%',
        height: '100%',
        width: '152px',
        float: 'left',
        padding: '0 25px'
    };

    const ContentsAreaStyle = {
        width:"797px",
        paddingLeft:"50px",
        position:'relative',
        float:'right'
    };

    return (
        <>
            <div style={wrap}>
                <div style={wrapper}>
                    <div style={nav}>
                        <SideBar/>
                    </div>
                    <div style={ContentsAreaStyle}>
                        <ContentsArea/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RentalLayout;