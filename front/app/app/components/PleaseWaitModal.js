import React from 'react';
import ModalMessage from '../rh-components/rh-ModalMessage';
import {Spinner} from '../rh-components/rh-Spinner';

export const PleaseWaitModal = ({message}) => {
  return (<ModalMessage message={{title: message, icon: 'cog'}}>
    <Spinner type="spinner-lg"/>
  </ModalMessage>)
};