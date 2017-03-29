import React from 'react';
import PageModule from '../../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import PortalUserSidebar from './PortalUserSidebar';

const PortalPageTemplate = ({children}) => {
  return (
    <div>
      <PageModule>
        <Row>
          <Col className="padding-right-double">
            {children}
          </Col>
          <Col width="4">
            <PortalUserSidebar/>
          </Col>
        </Row>
      </PageModule>
    </div>
  )
};

export default PortalPageTemplate;