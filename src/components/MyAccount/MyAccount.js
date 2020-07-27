import React, {useState} from 'react'
import AccountSummary from '../../containers/AccountSummary/AccountSummary'


export default function MyAccount() {
    let [num, setNum] = useState(45389);
    const changeNum = (num) => {
        alert('parent method called success!!');
        console.log(num);
        setNum(num);
    };
    return (
        <div>
            My Account Content
            <AccountSummary accnumber={num} change={changeNum}></AccountSummary>
        </div>
    )
}
