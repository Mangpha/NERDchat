import React, {useEffect} from 'react';
import './ServerRoomCard.scss';
import {BsFillMicFill} from 'react-icons/bs'

const ServerRoomCard = ({id, roomTitle, uuid, max}) => {

    useEffect(() => {

    }, [])
    return (
        <div className="room__card__container">
            <div className="room__title">{roomTitle}</div>
            <div className="room__capacity">현재인원/{max} <BsFillMicFill/></div>
        </div>
    )
}

export default ServerRoomCard
