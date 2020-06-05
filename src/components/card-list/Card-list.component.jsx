import React from 'react';

import Card from '../card/Card.component';
import './Card-list.component.css';

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
