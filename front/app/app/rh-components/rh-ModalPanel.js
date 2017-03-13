import React from 'react';
import ModalCover from './rh-ModalCover';
import {Panel} from './rh-Panel';

/**
 * Simple modal message cover
 */

class ModalPanel extends React.Component {
  render() {
    return (
      <div className="rh-popup-container">
        <ModalCover {...this.props.modal}/>
        <Panel {...this.props.panel}>
          {this.props.children}
        </Panel>
      </div>
    );
  }
}

ModalPanel.defaultProps = {
  modal: {},
  panel: {}
};

ModalPanel.propTypes = {
  modal: React.PropTypes.object,
  panel: React.PropTypes.object
};

export default ModalPanel;