import React from 'react';

import {Table} from "react-bootstrap";

const CurrentOrder = (props) => {
    const {currentStage} = props;


    const currentColor = {
        backgroundColor: '#e13337',
        background: 'linear-gradient(#e13337 80%, #d82a2e 100%)',
        color: '#ffffff',
    };


    return (
        <>
            <Table>
                <tbody>
                <tr>
                    <td style={currentColor}>STEP 01. 예약하기</td>
                    <td>STEP 02. 예약정보확인 및 결제</td>
                    <td>STEP 03. 예약완료</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
};


export default CurrentOrder;