import React from "react";

function ResultsList(props) {
    const isTopPairFound = props.daysTogether;
    let contents;

    if (isTopPairFound) {
        contents =
            <div className="flex-container">
                <div className="flex-item-row">{props.id1} , {props.id2}</div>
                <div className="flex-item-row">{props.daysTogether}</div>
            </div>;
    }
    else {
        contents =
            <div className="flex-container">
                <div className="flex-item-row noResult" >No current top pair</div>
                <div className="flex-item-row"></div>
            </div>
    };

    return (
        <>
            <div className="flex-container">
                <div className="flex-item-header">Employees</div>
                <div className="flex-item-header">Days worked</div>
            </div>
            {contents}
        </>
    );


}

export default ResultsList;