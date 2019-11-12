import React, {useCallback, useState} from "react";

import axios from 'axios';
import {Button} from "react-bootstrap";

import CurrentOrder from "../component/ReservePage/CurrentOrder";
import InformationAgree from "../component/ReservePage/InformationAgree";
import PrivateInformation from "../component/ReservePage/PrivateInformation";
import ReserveInformation from "../component/ReservePage/ReserveInformation";
import Memo from "../component/ReservePage/Memo";


const ReservePage = () =>{
    const [agree, setAgree] = useState('');
    const [privateInfo, setPrivateInfo] = useState([]);
    const [rentTerm, setRentTerm] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const [startPlace, setStartPlace] = useState('');
    const [endPlace, setEndPlace] = useState('');


    const setReserve = {
        setAgree : function (set){
            setAgree(set);
            console.log(agree);
        },
        setPrivateInfo : function(set){
            setPrivateInfo(set);
            console.log(privateInfo);
        },
        setRentTerm:function (day) {
            setRentTerm(day);
            console.log('ReservePage setInterval func : ' ,day);
        },
        setStartPlace:function (start){
            setStartPlace(start);
            console.log('ReservePage setStartPlace func : ' ,start);
        },
        setEndPlace:function (end) {
            setEndPlace(end);
            console.log('ReservePage setEndPlace func : ' ,end);
        },
        setCheckList:function (list) {
            setCheckList(list);
            console.log('ReservePage setCheckList func : ' ,list);
        },

    };


    const onSubmit = (e) =>{
        e.preventDefault();

        console.log(checkList);

        axios.post('/react',{
            privateInfo:privateInfo,
            rentInfo:
                {
                    rentTerm:rentTerm,
                    startPlace:startPlace,
                    endPlace:endPlace
                },
            checkList:checkList,

        })
            .then(res=>{
                console.log(res);
            })
            .catch(res =>{
                console.log(res);
            })
    };


    return(
        <>
            <form onSubmit={onSubmit} to={'/confirm'}>
                <CurrentOrder currentStage={1}/>
                <InformationAgree setReserve={setReserve}/>
                <PrivateInformation setReserve={setReserve}/>
                <ReserveInformation setReserve={setReserve}/>
                <Memo/>
                <Button variant="danger" type="submit" style={{width: '168px'}}>온라인 예약</Button>
            </form>
        </>
    )
};

export default ReservePage;