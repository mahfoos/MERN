import React from 'react';

const PlayerList = (props) => {
    return (
        <div>
            <ul className = "collection with-header">
                <li className = "collection-header"><h4>Players</h4></li>
                {props.players.map((item) => (
                    <a href="#!" className = "collection-item" key={item._id}
                    onclick = {props.updateCurrentPlayer.bind(this,item)}>
                        {item.firstName}
                        {item.lastname}
                    </a>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;