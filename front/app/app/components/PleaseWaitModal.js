import React from 'react';
import {ModalMessage} from '../rh-components/rh-ModalMessage';
import {Spinner} from '../rh-components/rh-Spinner';

export const PleaseWaitModal = ({title, icon='cog', children}) => {
  return (<ModalMessage message={{title: title, icon: 'cog'}}>
    {children}
    <Spinner type="spinner-lg"/>
  </ModalMessage>)
};