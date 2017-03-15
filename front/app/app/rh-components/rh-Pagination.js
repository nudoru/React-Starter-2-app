import React from 'react';
import {fillIntArray} from '../../../../shared/utils/Toolbox';

export const Pagination = ({
  prev = false,
  next = true,
  start = 1,
  end = 5,
  current = 1
}) => {

  prev        = prev ? (
      <a href="#"><i className="fa fa-step-backward"/></a>) : (
      <span className="disabled"><i className="fa fa-step-backward"/></span>);
  next        = next ? (
      <a href="#"><i className="fa fa-step-forward"/></a>) : (
      <span className="disabled"><i
        className="fa fa-step-forward"/></span>);
  let numbers = fillIntArray(start, end);

  return (<div className="rh-pagination">
    <ul>
      <li>{prev}</li>
      {
        numbers.map((n) => {
          return (n === current ?
            (<li><span className="active">{n}</span></li>) :
            (<li><a href="#">{n}</a></li>))
        })
      }
      <li>{next}</li>
    </ul>
  </div>);

};