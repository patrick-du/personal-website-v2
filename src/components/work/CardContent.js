import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { job, position, imgPath, time, link } = props;
    return (
        <Link to={link} className="linkdec">
            <div className="workCard">
                <div className="row">
                    <div id="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="workCardImage" />
                    </div>
                    <div id="col2">
                        <div className="workCardText px-0">
                            <p className="p-font med card-title" id="pos">{position}</p>
                            <p className="s-font lightText card-text" id="job">{job}<div id="time">{time}</div></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default Card;