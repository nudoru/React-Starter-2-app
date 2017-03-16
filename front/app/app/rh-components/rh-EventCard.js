import React from 'react';
import {Card} from './rh-Card';

// Expects format January 1, 2017
const splitDate = (datestr) => {
  let parts = datestr.split(' ');
  return {
    month: parts[0],
    day  : parts[1].substring(0, parts[1].length - 1),
    year : parts[2]
  };
};

const EventCard = ({startDate, endDate="", name, city, country, room=""}) => {
  let date = splitDate(startDate);
  return (<Card >
    <div className="inner">
      <div className="left-1-3">
        <ul className="rh-event">
          <li className="month">{date.month}</li>
          <li className="day">{date.day}</li>
          <li className="year">{date.year}</li>
        </ul>
      </div>
      <div className="right-2-3">
        <ul className="rh-event-details">
          <li className="class">{name}</li>
          <li
            className="city">{city + ', ' + country}</li>
          <li className="room">{room}</li>
        </ul>
      </div>
    </div>
  </Card>);
};

export default EventCard;