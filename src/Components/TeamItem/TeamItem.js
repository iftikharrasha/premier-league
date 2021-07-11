import React from 'react';
import { Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamItem.css';

const TeamItem = (props) => {
    const {strAlternate, strCountry, strSport, strTeamLogo, idTeam} = props.team;
    return (
        <>
            <Col sm={3} xs={6} className="my-4">
                <Link to={"/team/"+idTeam}>
                    <div className="team-banner">
                        <img src={strTeamLogo} className="img-fluid" alt={strAlternate} />
                    </div>
                </Link>
                {/* <h2 className="c-tag-1">{strAlternate}</h2> */}
            </Col>
        </>
    );
};

export default TeamItem;