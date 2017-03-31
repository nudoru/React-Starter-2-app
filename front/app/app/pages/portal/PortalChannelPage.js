import React from 'react';
import { history } from 'react-router-dom';
import Lorem from '../../../../../shared/utils/Lorem';
import { connect } from 'react-redux';
import {
  CardHeader,
  CardContent,
  CardFooter,
  CardFrame,
  CardMasonry33Group
} from '../../rh-components/rh-Card';
import {
  SecondaryButton
} from '../../rh-components/rh-Button';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import Hero from '../../rh-components/rh-Hero';
import { PortalPageTemplateNoSidebar } from './PortalPageTemplate';
import DonutChart from '../../rh-components/rh-DonutChart';
import { TabHGroup, Tab } from '../../rh-components/rh-Tabs';
import { StatusIcon, StatusIconTiny } from '../../rh-components/rh-StatusIcon';
import Status from '../../rh-components/rh-Status';

const ChannelHero = () => {
  return (<Hero>
    <Row>
      <Col>
        <h1>Welcome to the New Hire Learning Channel!</h1>
        <h5>Begin your journey as a <strong>new hire</strong> at Red Hat.</h5>
      </Col>
      <Col width="3">
        <div className="margin-center">
          <DonutChart value={42} size={125} strokewidth={10} valuelabel="Complete"
                      className="rh-donutchart-white margin-center"/>
          <p className="small padding-top">You're currently active in this channel.</p>
        </div>
      </Col>
    </Row>

  </Hero>);
};

const ChannelCard = ({icon = 'cog', flag}) => {
  return (
    <CardFrame className={flag ? 'rh-card-success' : 'rh-card-info'}>
      <CardHeader>
        <h1><i
          className={'fa fa-' + icon + ' padding-right'}/>{Lorem.title(5, 10)}</h1>
      </CardHeader>
      <CardContent>
        <p className="margin-bottom">{Lorem.paragraph(3, 5)}</p>
        {flag ? <Status type="pass">You've completed this module.</Status> : null}
      </CardContent>
      <CardFooter>
        <SecondaryButton text>Start ></SecondaryButton>
      </CardFooter>
    </CardFrame>
  );
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
        <TabHGroup>
          <Tab active={true} label="Emerging"/>
          <Tab active={false} label="Practicing"/>
          <Tab active={false} label="Experienced" />
          <Tab active={false} label="On going" />
        </TabHGroup>
        <h1>Welcome to Red Hat</h1>
        <p>Beging your learning journey here. {Lorem.paragraph(5,5)}</p>
        <h2>Goals for this section</h2>
        <ul>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
          <li>{Lorem.sentence(10, 30)}</li>
        </ul>
        <CardMasonry33Group>
          {[1,1,1,1,0,0,0,0,0].map(f => <ChannelCard flag={f}/>)}
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