import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TeamItem from '../TeamItem/TeamItem';
import './Teams.css';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect( () => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.teams);
            setTeams(data.teams);
            // setTeams(data.teams[0])
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <>
            <section id="team-section">
                <div className="team">
                    <Container className="c_custom">
                        <Row>
                            <Col>
                                <span className="c-tag-2 semi-24">01</span>
                                <div className="team-top d-flex align-items-center">
                                    <h2 className="d-inline semi-42 c-tag-1">Teams</h2>
                                    <svg className="d-inline ml-3" width="140" height="40" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="140" height="30" fill="#959532"/>
                                        <path d="M29.5 0L16.5 30H21L34 0H29.5Z" fill="#FFFDFE"/>
                                        <path d="M53 0L40 30H44.5L57.5 0H53Z" fill="#FFFDFE"/>
                                        <path d="M76 0L63 30H67.5L80.5 0H76Z" fill="#FFFDFE"/>
                                        <path d="M100 0L87 30H91.5L104.5 0H100Z" fill="#FFFDFE"/>
                                        <path d="M123 0L110 30H114.5L127.5 0H123Z" fill="#FFFDFE"/>
                                    </svg>
                                </div>

                                <div className="team-wrapper pt-5">
                                    <Row>
                                        {
                                            teams.map(team => <TeamItem team={team} key={team.idTeam}></TeamItem>)
                                        }
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Teams;