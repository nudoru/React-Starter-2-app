import React from 'react';
import PropTypes from 'prop-types';

// let testData = {
//   header: [{title: 'title', cellRenderer: null}],
//   rows  : [
//     {
//       className: 'rowClass',
//       cols     : []
//     }
//   ]
// }

class CustomTable extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let headers = this.props.headers,
        rows = this.props.rows;

    return (
      <table className="rh-custom-table">
        <thead>
        <tr>
          {headers.map(header => <td>{header.title}</td>)}
        </tr>
        </thead>
        {rows.map(row => {
          return (<tr className={row.className.join(' ')}>
            {row.cols.map((col) => {col})}
          </tr>)
        })}
      </table>
    );
  }
}

CustomTable.defaultProps = {};
CustomTable.propTypes    = {
  headers: PropTypes.array,
  rows: PropTypes.array
};

export default CustomTable;