import React, { useState } from 'react';
import Members from './members';
import AddMember from './addMembers';
import TotalMembers from './totalMembers'

const Heading = () => {
    const [page, setPage] = useState('home');

    const handleClick = e => {
        const { value } = e.target;
        setPage(value);
    }
    
    return(
    <>
    <div className='Nav'>
        <ul>
            <li>
                <button onClick={handleClick} value="home"><i class="fas fa-home"></i> Home</button>
            </li>
            <li>
                <button onClick={handleClick} value="members">Members</button>
            </li>
            <li>
                <button onClick={handleClick} value="addMember">Add Member</button>
            </li>
        </ul>
        </div>
        {page === 'members' ? <Members /> : null}
        {page === 'addMember' ? <AddMember /> : null}
        {page === 'home' ? <TotalMembers /> : null}
    </>
    )
}


export default Heading;
