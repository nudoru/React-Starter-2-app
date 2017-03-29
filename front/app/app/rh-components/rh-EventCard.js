import React from 'react';
import {Card} from './rh-Card';
import {Row, Col} from './rh-Grid';
import {CalendarTile} from './rh-CalendarTile';

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
  return (<Card style="narrow">
    <Row>
      <Col width="4">
        <CalendarTile month={date.month} day={date.day} year={date.year} />
      </Col>
      <Col width="8">
        <ul className="rh-event-details">
          <li className="class">{name}</li>
          <li
            className="city">{city + ', ' + country}</li>
          <li className="room">{room}</li>
        </ul>
      </Col>
    </Row>
  </Card>);
};

export default EventCard;