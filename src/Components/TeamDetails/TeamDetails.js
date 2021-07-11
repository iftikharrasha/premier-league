import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';
import './TeamDetails.css';

const TeamDetails = () => {
    const { teamKey } = useParams();
    const [team, setTeam] = useState([]);

    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamKey}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.teams);
            setTeam(data.teams[0]);
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <h1>{teamKey}</h1>
            <Detail team={team}></Detail>
        </>
    );
};

export default TeamDetails;