import React, {useState, useCallback} from 'react';
import {Table} from 'react-bootstrap';


const InformationAgree = ({setReserve}) => {
    const [chkBox, setChkBox] = useState(false);
    const [yes1, setYes1] = useState();
    const [yes2, setYes2] = useState();
    // if (check === true) {
    //     setChkBox(check);
    //     setYes1(check);
    //     setYes2(check);
    // } else {
    //     setChkBox(false);
    //     setYes1(false);
    //     setYes2(false);
    // }
    const handleChange = (e) =>{
        const check = e.target.checked;
        console.log('check',check);

        if (check === true) {
            setChkBox(check);
            setYes1(check);
            setYes2(check);
        } else {
            setChkBox(false);
            setYes1(false);
            setYes2(false);
        }

        setReserve.setAgree(()=>{
            return check;
        });
    };

    const centerStyles = {
        textAlign: "center"
    };

    return (
        <>
            <section>
                <Table responsive bordered style={centerStyles}>
                    <thead>
                    <tr>
                        <th colSpan="4">[필수] 개인정보 수집 이용 동의</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th>목적</th>
                        <th>항목</th>
                        <th>보유기간</th>
                        <th>동의여부</th>
                    </tr>
                    <tr>
                        <td>이용자 식별 및 본인여부 확인</td>
                        <td>성, 이름, 서비스이용기간, 수령/반납장소, 메모</td>
                        <td>서비스 해지 후 6개월까지</td>
                        <td rowSpan="4">
                            <label htmlFor="r1">동의함
                                <input type="radio" name="group1" value="true" checked={yes1 === true}  id="y1"/>
                            </label>
                            <label htmlFor="r2">동의안함
                                <input type="radio" name="group1" value="false" checked={yes1 === false} id="n1"/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>계약 이행을 위한 연락 민원 등 고객 고충 처리</td>
                        <td>연락처(이메일, 연락처)</td>
                        <td>서비스 해지 후 6개월까지</td>
                    </tr>
                    <tr>
                        <td>상품 임대에 대한 결제 및 합산청구에 이용</td>
                        <td>카드사명, 카드주의 성명, 카드유효기간, 결제정보</td>
                        <td>서비스 해지 후 6개월까지</td>
                    </tr>
                    <tr>
                        <th colSpan="3">※ 만 14세 미만 법정대리인 동의가 필요합니다.</th>
                    </tr>
                    </tbody>
                </Table>
                <div>※ KT 로밍 서비스 제공을 위해서 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.</div>

                <Table responsive bordered style={centerStyles}>
                    <thead>
                    <tr>
                        <th colSpan={3}>[필수] 개인정보의 처리위탁에 대한 동의</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>수탁자</th>
                        <th>목적</th>
                        <th>동의여부</th>
                    </tr>
                    <tr>
                        <td>KT</td>
                        <td>KT 로밍 인바운드 홈페이지 예약 시스템 유지 및 곤리</td>
                        <td rowSpan={4}>
                            <label htmlFor="r3">동의함
                                <input type="radio" name="group2" value="true" checked={yes2===true} id="y2"/>
                            </label>

                            <br/>

                            <label htmlFor="r4">동의안함
                                <input type="radio" name="group2" value="false"  checked={yes2===false} id="n2"/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>KT IS/KT CS</td>
                        <td>렌탈 관리 및 로밍 고객센터 운영</td>
                    </tr>
                    <tr>
                        <td>넥스브레인</td>
                        <td>kt 로밍 인바운드 홈페이지 운영 및 관리</td>
                    </tr>
                    <tr>
                        <td>(주)케이알파트너스</td>
                        <td>신용카드 결제 및 온라인 결제대행</td>
                    </tr>
                    </tbody>
                </Table>
                <div>※ KT 로밍 서비스 제공을 위해서 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.</div>
                <div>
                    <label>
                        <input type="checkbox" onChange={handleChange} checked={chkBox} name="chkAll" id="chkAll"/>
                        KT 로밍 서비스 이용을 위한 필수 약관에 대해 모두 동의합니다.
                    </label>
                </div>
            </section>
        </>
    );
};

export default InformationAgree;
