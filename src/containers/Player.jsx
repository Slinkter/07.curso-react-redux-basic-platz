import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/components/Player.scss";

function Player(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log("id", id);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={handleBack}>
                    Regresar
                </button>
            </div>
        </div>
    );
}

export default Player;
