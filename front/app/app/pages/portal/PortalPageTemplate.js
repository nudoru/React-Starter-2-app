import React from 'react';
import PageModule from '../../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import PortalUserSidebar from './PortalUserSidebar';

export const PortalPageTemplate = ({children, hero}) => {
  return (
    <div>
      <PageModule className="padding-none">
        <div className="color-bg-body">
          {hero}
          <Row>
            <Col className="padded">
              {children}
            </Col>
            <Col width="4" className="padding-top">
              <PortalUserSidebar/>
            </Col>
          </Row>
        </div>
      </PageModule>
    </div>
  );
};

export const PortalPageTemplateNoSidebar = ({children, hero}) => {
  return (
    <div>
      <PageModule className="padding-none">
        <div className="color-bg-white">
          {hero}
          <div className="padded">
            {children}
          </div>
        </div>
      </PageModule>
    </div>
  );
};