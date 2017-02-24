import React from 'react';
import IconCircle from '../rh-components/rh-IconCircle';
import ModalMessage from '../rh-components/rh-ModalMessage';
import {Spinner} from '../rh-components/rh-Spinner';

export const PleaseWaitModal = ({message}) => {
  return (<div>
    <ModalMessage error={false} dismissible={false}>
      <div className="rh-login">
        <IconCircle icon="cog"/>
        <h1>{message}</h1>
        <Spinner type="spinner-lg"/>
      </div>
    </ModalMessage>
  </div>)
};