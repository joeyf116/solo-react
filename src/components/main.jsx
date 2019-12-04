import React, { useState } from 'react';
import Members from './members';
import AddMember from './addMembers';
import TotalMembers from './totalMembers';
import MakeSale from './makeSale';
import home from '../images/icons/home.png';
import addUser from '../images/icons/add-user.png';
import makeSale from '../images/icons/makeSale.png';
import members from '../images/icons/members.png';

const Main = () => {
    const [page, setPage] = useState('home');

    const handleClick = e => {
        console.log(e.currentTarget)
        const { value } = e.currentTarget;
        setPage(value);
    }
    
    return(
    <>
    <div className='Nav'>
        <ul>
            <li>
                <button onClick={handleClick} value="home"><img src={home} /></button>
            </li>
            <li>
                <button onClick={handleClick} value="members"><img src={members} /></button>
            </li>
            <li>
                <button onClick={handleClick} value="addMember"><img src={addUser} /></button>
            </li>
            <li>
                <button onClick={handleClick} value="makeSale"><img src={makeSale} /></button>
            </li>
        </ul>
        </div>
        {page === 'members' ? <Members /> : null}
        {page === 'addMember' ? <AddMember /> : null}
        {page === 'home' ? <TotalMembers /> : null}
        {page === 'makeSale' ? <MakeSale /> : null}
    </>
    )
}


export default Main;
