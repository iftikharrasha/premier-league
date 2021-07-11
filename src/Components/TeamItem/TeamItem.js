import React from 'react';
import { Col} from 'react-bootstrap';
import './TeamItem.css';

const TeamItem = (props) => {
    const {strAlternate, strCountry, strSport, strTeamLogo} = props.team;

    return (
        <>
            <Col sm={3} xs={6} className="my-4">
                <div className="team-banner">
                    <img src={strTeamLogo} className="img-fluid" alt={strAlternate} />
                </div>
            </Col>
        </>
    );
};

export default TeamItem;