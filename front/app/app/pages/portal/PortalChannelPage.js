import React from 'react';
import { history } from 'react-router-dom';
import Lorem from '../../utils/Lorem';
import { connect } from 'react-redux';
import { CardMasonry33Group } from '../../rh-components/rh-Card';
import { NeutralButton } from '../../rh-components/rh-Button';
import { Col, Row } from '../../rh-components/rh-Grid';
import Hero from '../../rh-components/rh-Hero';
import { PortalPageTemplateNoSidebar } from './PortalPageTemplate';
import DonutChart from '../../rh-components/rh-DonutChart';

import { BlockLink, BlockLinkVGroup } from '../../rh-components/rh-BlockLinks';
import { StepBar, StepBarItem } from '../../rh-components/rh-StepBar';
import { CourseCard } from './PortalCommonElements';

const ChannelHero = () => {
  return (<Hero>
    <Row>
      <Col width="9">
        <h1>New Hire Learning Channel</h1>
        <h5>Begin your journey as a <strong>new hire</strong> at Red Hat.</h5>
      </Col>
      <Col width="3">
        <div className="margin-center">
          <DonutChart value={42} size={125} strokewidth={10}
                      valuelabel="Complete"
                      className="rh-donutchart-white margin-center"/>
        </div>
      </Col>
    </Row>

  </Hero>);
};

class TemplatePage extends React.Component {

  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    console.log('Template page, ', this.props);
  }

  render () {

    return (
      <PortalPageTemplateNoSidebar hero={<ChannelHero/>}>
        <h1>Welcome to Red Hat!</h1>
        <Row className="margin-bottom-triple">
          <Col width="9" className="padding-right">
            <p>Begin your learning journey here. {Lorem.paragraph(5, 5)}</p>
            <ul>
              <li>{Lorem.sentence(10, 30)}</li>
              <li>{Lorem.sentence(10, 30)}</li>
              <li>{Lorem.sentence(10, 30)}</li>
            </ul>
          </Col>
          <Col width="3">
            <BlockLinkVGroup style="white">
              <BlockLink label="You're active in this channel as a New Hire."
                         link="#">
                <NeutralButton hollow block>Leave channel<i
                  className="fa fa-sign-out padding-left"/></NeutralButton>
              </BlockLink>
              <BlockLink label="View channel resources"
                         byline="A message or report problems with content."
                         link="#"/>
              <BlockLink label="Leave feedback"
                         byline="A message or report problems with content."
                         link="#"/>
            </BlockLinkVGroup>
          </Col>
        </Row>

        <StepBar>
          <StepBarItem>Prepare</StepBarItem>
          <StepBarItem current>Welcome</StepBarItem>
          <StepBarItem>Connect</StepBarItem>
          <StepBarItem>Grow + Develop</StepBarItem>
        </StepBar>

        <h2>Goals for this section</h2>
        <ul>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
        </ul>
        <CardMasonry33Group>
          {[1, 1, 0, 1, 0, 0, 0, 0, 0].map(f => <CourseCard flag={f}/>)}
        </CardMasonry33Group>
      </PortalPageTemplateNoSidebar >);
  }
}

TemplatePage.defaultProps = {};
TemplatePage.propTypes    = {};

const mapStateToProps    = (state) => {
  return {
    config: state.config
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);