import React from 'react';
import './InfoBoard.css'

function InfoBoard(props) {

    const infoType = "InfoCard-"+props.infoType;
    return (
        <div className={infoType}>
            <div className="InfoTitle">{props.boardTitle}</div>

            <div className="InfoText">{props.infoText}</div>
        </div>
    );
}

export default InfoBoard;