import React from 'react';
import Header from '../rh-components/rh-Header';

export const AppHeader = ({config}) =>
  <Header title={config.setup.title}
          secondaryNav={config.setup.secondaryNav}
          username='Joe User'
          nav={[
            {label: 'Components', route: '/'},
            {label: 'Forms', route: '/forms'}
          ]}/>;