import React, {useContext,useEffect, useState} from 'react';
import {Table} from "react-bootstrap";

const ReserveResult = ({checkList, handleCompareList,RentInterval}) => {

    const [resultPrice, setResultPrice] = useState(0);

    // CheckBox로 선택한 Item들의 List를 Index 기준으로 정렬한다.
    checkList.sort((a, b) => {
        return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
    });

    // 해당 오브젝트의 카테고리가 etc 일 경우와 아닌 경우를 나눈다
    const isCategory = (item) => {
        if (item.category !== 'etc')
            return item.category + '(' + item.term + ' 일권)';
        return item.name;
    };

    // 해당 오브젝트의 이름에 따라 dropDown 메뉴의 선택수를 결정한다
    const dropDownCount = (item) => {
        let cnt;
        if (item !== 'Postpaid SIM')
            cnt = 51;
        else
            cnt = 4;
        const arr = new Array(cnt);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = i;
        }
        return arr;
    };

    // select option 메뉴의 변동에 따라 값을 변경
    const handleChange = (e) => {
        const {target} = e;

        const etcItem = checkList.filter((f)=>{
            if(f.tag !== target.name)
                return f;
        });

        const EqualsItem = checkList.filter((f)=>{
            if(f.tag === target.name){
                f.optionValue = parseInt(target.value);
                return f;
            }
        });


        let result = 0;

        checkList.map((m)=>{
            result += (m.price * m.optionValue);
        });

        setResultPrice(result);

        // 부모 컴포넌트에 업데이트 된 checkList를 업로드 해준다
        handleCompareList([...etcItem,...EqualsItem]);
    };

    // 삭제 버튼의 컨트롤
    const handleClick = (e) => {
        e.preventDefault();
        console.log('click', e.target);

        const del = checkList.filter((f) =>{
            if(f.tag === e.target.name)
                setResultPrice(resultPrice-(f.price * f.optionValue));
            else
                return f;
        });

        handleCompareList(del);
    };

    // 상품 선택시 상품 정보 입력 생성
    const list = checkList.map((item) =>
        <>
            <tr key={item.tag}>
                <td>{isCategory(item)}</td>
                <td>{item.price} 원 /1{item.category == "etc"? "일" : "개"}</td>
                <td>-</td>
                <td>
                    <select name={item.tag} onChange={handleChange}>
                        {dropDownCount(item.category).map((n) => <option value={n}
                                                                         selected={item.optionValue===n}>{n}</option>)}
                    </select>
                </td>
                <td>{item.optionValue === undefined ? 0 : item.optionValue * item.price} 원</td>
                <td><input type="button" name={item.tag} onClick={handleClick} value="삭제"/></td>
            </tr>
        </>
    );

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <td>상품</td>
                    <td>이용요금</td>
                    <td>임대기간요금</td>
                    <td>수량</td>
                    <td>합계</td>
                    <td>삭제</td>
                </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        이용요금합계
                    </td>
                    <td colSpan={5}>
                        {resultPrice} 원
                    </td>
                </tr>
                <tr>
                    <td>
                        할인금액
                    </td>
                    <td colSpan={5}>0원</td>
                </tr>
                <tr>
                    <td>이용요금총액</td>
                    <td colSpan={5}>
                        {resultPrice} 원
                    </td>
                </tr>
                </tfoot>
            </Table>
        </>
    );
};

export default ReserveResult;
