import React from 'react';

const Detail = (props) => {
    const {strAlternate, strCountry, strSport, strTeamLogo, idTeam} = props.team;

    return (
        <>
            <h1>{strAlternate}</h1>
        </>
    );
};

export default Detail;