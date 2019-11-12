import React,{useState} from "react";
import {Table} from "react-bootstrap";

const PrivateInformation = ({setReserve}) =>{
    const [surName, setSurName] = useState('');
    const [givenName, setGivenName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const {target} = e;
        switch (target.name) {
            case"sur":
                setSurName(target.value);
                break;
            case "given":
                setGivenName(target.value);
                break;
            case "email":
                setEmail(target.value);
                break;
            case "phone":
                setPhone(target.value);
                break;
        }

        setReserve.setPrivateInfo(()=>{
            return {
                firstName: surName,
                lastName: givenName,
                mail:email,
                phone:phone
            }
        });
    };

    return(
        <>
            <section>
                <div>
                    <h3>개인정보 입력</h3>
                </div>
                <Table>
                    <tbody>
                    <tr>
                        <th>Surname (성)</th>
                        <td><input type="text" onChange={handleChange} name="sur"/></td>
                        <th>Given name (이름)</th>
                        <td><input type="text" onChange={handleChange} name="given"/></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td><input type="text" onChange={handleChange} name="email"/></td>
                        <th>연락처</th>
                        <td><input type="text" onChange={handleChange} name="phone"/></td>
                    </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
};

export default PrivateInformation;