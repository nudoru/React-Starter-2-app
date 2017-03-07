import React from 'react';
import ModalCover from './rh-ModalCover';
import PopupSimple from './rh-PopupSimple';

/**
 * Simple modal message cover
 */

class ModalMessage extends React.Component {
  render() {
    return (
      <div className="rh-popup-container">
        <ModalCover {...this.props.modal}/>
        <PopupSimple {...this.props.message}>
          {this.props.children}
        </PopupSimple>
      </div>
    );
  }
}

ModalMessage.defaultProps = {
  modal  : {},
  message: {}
};

ModalMessage.propTypes = {
  modal  : React.PropTypes.object,
  message: React.PropTypes.object
};

export default ModalMessage;