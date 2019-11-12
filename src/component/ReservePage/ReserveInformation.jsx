import React, {useRef, useState, useEffect} from 'react';
import {Table} from "react-bootstrap";
import Calendar from 'react-calendar'
import ReserveResult from "./ReserveResult";

const ReserveInformation = ({setReserve}) => {

    const [checkList, setCheckList] = useState([]);
    const [rentInterval, setRentInterval] = useState(0);
    const [startPlace, setStartPlace] = useState('');
    const [endPlace,setEndPlace] = useState('');

    useEffect(()=>setReserve.setStartPlace(startPlace),[startPlace]);
    useEffect(()=>setReserve.setEndPlace(endPlace),[endPlace]);
    const reservation = [
        {
            title: 'Prepaid SIM',
            option: [
                {
                    index: 1,
                    category: 'Prepaid SIM',
                    name: '￦6,600 (1일권)',
                    tag: 'Pre-one',
                    term: 1,
                    optionValue: 0,
                    price: 6600
                },
                {
                    index: 2,
                    category: 'Prepaid SIM',
                    name: '￦27,500 (5일권)',
                    tag: 'Pre-five',
                    term: 5,
                    optionValue: 0,
                    price: 27500
                },
                {
                    index: 3,
                    category: 'Prepaid SIM',
                    name: '￦38,500 (10일권)',
                    tag: 'Pre-teen',
                    term: 10,
                    optionValue: 0,
                    price: 38500
                },
                {
                    index: 4,
                    category: 'Prepaid SIM',
                    name: '￦71,500 (30일권)',
                    tag: 'Pre-thirty',
                    term: 30,
                    optionValue: 0,
                    price: 71500
                },
            ]
        },
        {
            title: 'Postpaid SIM',
            option: [
                {
                    index: 5,
                    category: 'Postpaid SIM',
                    name: '￦27,500 (5일권)',
                    tag: 'Pos-five',
                    term: 5,
                    optionValue: 0,
                    price: 27500
                },
                {
                    index: 6,
                    category: 'Postpaid SIM',
                    name: '￦38,500 (10일권)',
                    tag: 'Pos-teen',
                    term: 10,
                    optionValue: 0,
                    price: 38500
                },
                {
                    index: 7,
                    category: 'Postpaid SIM',
                    name: '￦71,500 (30일권)',
                    tag: 'Pos-thirty',
                    term: 30,
                    optionValue: 0,
                    price: 71500
                },
            ]
        },
        {
            title: 'Prepaid Data SIM',
            option: [
                {
                    index: 8,
                    category: 'Prepaid Data SIM',
                    name: '￦6,600 (1일권)',
                    tag: 'Data-one',
                    term: 1,
                    optionValue: 0,
                    price: 6600
                },
                {
                    index: 9,
                    category: 'Prepaid Data SIM',
                    name: '￦27,500 (5일권)',
                    tag: 'Data-five',
                    term: 5,
                    optionValue: 0,
                    price: 27500
                },
                {
                    index: 10,
                    category: 'Prepaid Data SIM',
                    name: '￦38,500 (10일권)',
                    tag: 'Data-teen',
                    term: 10,
                    optionValue: 0,
                    price: 38500
                },
                {
                    index: 11,
                    category: 'Prepaid Data SIM',
                    name: '￦71,500 (30일권)',
                    tag: 'Data-thirty',
                    term: 30,
                    optionValue: 0,
                    price: 71500
                },
            ]
        },
        {
            title: '기타상품',
            option: [
                {
                    index: 12,
                    category: 'etc',
                    name: 'WiFi Router',
                    tag: 'wifi',
                    term: 1,
                    optionValue: 0,
                    price: 8800
                },
                {
                    index: 13,
                    category: 'etc',
                    name: '휴대폰',
                    tag: 'phone',
                    term: 1,
                    optionValue: 0,
                    price: 3300
                },
                {
                    index: 14,
                    category: 'etc',
                    name: '보조배터리',
                    tag: 'sub-battery',
                    term: 1,
                    optionValue: 0,
                    price: 2200
                },
            ]
        },
    ];

    // 출입국 대여 장소
    const rentPlace = ["선택", "인천공항 T1", "인천공항 T2", "김포공항", "김해공항", "부산항만"];

    const handleChange = (e) => {
        const {target} = e;

        const titleOption = reservation.find(o => o.title === target.value);
        const option = titleOption.option;

        if (target.checked === true) {
            // Option Information Data Search
            const addOption = option.find((item) => item.tag === target.name);
            setCheckList(prevCheckList =>
                [...prevCheckList, addOption]
            );
        } else {
            const deleteOption = checkList.filter(item => item.tag !== target.name);
            setCheckList(deleteOption.map((item) => item));
        }
    };

    const bindImmigration = rentPlace.map((item) => {
            return (<option value={item}>
                        {item}
                    </option>
            )
        }
    );

    // 해당 요소의 이름을 체크해서 state 값을 넣어줌
    const handleImmigration = (e) => {
        if(e.target.name === "entrance") {
            setStartPlace(e.target.value);
        }
        else {
            setEndPlace(e.target.value);
            setReserve.setEndPlace(endPlace);
        }
    };

    const getDays = (days) => {
        return Math.ceil(days.getTime() / (1000 * 3600 * 24));
    };

    // 빌리는 기간 일수
    const intervalDay = (start, end) => {
        return getDays(end) - getDays(start);
    };

    // 캘린더 포맷
    const calendarFormat = (d)=>{
        return new Date(d).toISOString().split("T")[0];
    };

    const handleRent = (e) => {
        setRentInterval(intervalDay(e[1], e[0]));
        setReserve.setRentTerm([calendarFormat(e[0]),calendarFormat(e[1])]);
    };

    const handleCompareList = (value) => {
        setCheckList(value);
        setReserve.setCheckList(value);
    };

    // checkList 삭제시 checkbox re-render
    const isCheckList = (tag) => {
        checkList.filter((f)=> {
            if(f.tag === tag)
                return true;
            return false;
        });
    };



    const reserve = reservation.map((title) => {
        return (
            <tr>
                <th>{title.title}</th>
                {
                    title.option.map((item) =>
                        <td key={item.tag}>
                            <label htmlFor={item.tag}>
                                <input type="checkbox" key={item.index} name={item.tag} id={item.tag} value={title.title}
                                       defaultChecked={isCheckList(item.tag)===true} onChange={handleChange}/>
                                {item.name}
                            </label>
                        </td>
                    )
                }
            </tr>
        )
    });

    return (
        <>
            <section>
                <div>
                    <h3>예약정보 입력</h3>
                    <Table variant="dark">
                        <tbody>
                        {reserve}
                        </tbody>
                    </Table>
                    <Table>
                        <tbody>
                        <tr>
                            <th>
                                <label htmlFor="rent">>
                                    임대일/반납일<Calendar className="rent" onChange={handleRent} selectRange minDate={new Date()}/>
                                </label>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="entrance">
                                    수령장소 (입국)
                                    <select name="entrance" id="entrance" onChange={handleImmigration}>
                                        {bindImmigration}
                                    </select>
                                </label>
                            </th>
                            <th>
                                <label htmlFor="">
                                    반납장소 (출국)
                                    <select name="departure" id="departure" onChange={handleImmigration}>
                                        {bindImmigration}
                                    </select>
                                </label>
                            </th>
                        </tr>
                        </tbody>
                    </Table>
                    <div>
                        <p>※ 예약 신청하신 일자에 단말기를 수령하지 않으시면, 익일에 자동으로 예약이 취소됩니다.</p>
                        <p>※ 각 상품은 수령시 별도의 보증금이 청구됩니다. 자세한 내용은 로밍센터로 문의하시기 바랍니다.</p>
                        <p>※ 50대 이상 임대 건에 대해서는 “다량임대 문의” 메뉴를 이용해 주세요</p>
                    </div>
                </div>
                <div>
                    <ReserveResult checkList={checkList} handleCompareList={handleCompareList}
                                   rentInterval={rentInterval}/>
                </div>
                {console.log("pare", checkList)}
            </section>

        </>
    );
};

export default ReserveInformation;
