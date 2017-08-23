import React from 'react';

// Donut Chart implementation from this pen http://codepen.io/zeroskillz/pen/mPmENy

export const DonutChart = ({size = 75, strokewidth = 5, value = 0, className, valuelabel}) => {

  let halfsize       = (size * 0.5),
      radius         = halfsize - (strokewidth * 0.5),
      circumference  = 2 * Math.PI * radius,
      strokeval      = ((value * circumference) / 100),
      dashval        = (strokeval + ' ' + circumference),
      trackstyle     = {strokeWidth: strokewidth},
      indicatorstyle = {
        strokeWidth    : strokewidth,
        strokeDasharray: dashval
      },
      rotateval      = 'rotate(-90 ' + halfsize + ',' + halfsize + ')',
      valY           = valuelabel.length ? halfsize : halfsize + 7,
      labelY         = halfsize + 15;

  return <svg width={size} height={size}
              className={'rh-donutchart ' + className}>
    <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval}
            style={trackstyle} className="rh-donutchart-track"/>
    <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval}
            style={indicatorstyle} className="rh-donutchart-indicator"/>
    <text className="rh-donutchart-text" x={halfsize} y={halfsize}
          style={{textAnchor: 'middle'}}>
      <tspan className="rh-donutchart-text-val" x={halfsize}
             y={valY}>{value}</tspan>
      <tspan className="rh-donutchart-text-percent">%</tspan>
      <tspan className="rh-donutchart-text-label" x={halfsize}
             y={labelY}>{valuelabel}</tspan>
    </text>
  </svg>;
};

export default DonutChart;