import React from 'react';
import ModalCover from './rh-ModalCover';
import PopupSimple from './rh-PopupSimple';

/**
 * Simple modal message cover
 */

export const ModalMessage = ({modal, message, children}) => {
  return (
    <div className="rh-popup-container">
      <ModalCover {...modal}/>
      <PopupSimple {...message}>
        {children}
      </PopupSimple>
    </div>
  );
};