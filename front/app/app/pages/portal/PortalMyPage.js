import React from 'react';
import Lorem from '../../utils/Lorem';
import { connect } from 'react-redux';
import PageModule from '../../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import {
  Card,
  CardHGroup,
  CardHGroupDecorative,
  CardHGroupTable,
  CardVGroup,
  CardMasonry33Group
} from '../../rh-components/rh-Card';
import IconCircle from '../../rh-components/rh-IconCircle';
import IconCircleText from '../../rh-components/rh-IconCircleText';
import EventCard from '../../rh-components/rh-EventCard';
import {
  BlockLinkHGroup,
  BlockLinkVGroup,
  BlockLink
} from '../../rh-components/rh-BlockLinks';
import { TagHGroup, Tag } from '../../rh-components/rh-Tag';
import { StatusIcon, StatusIconTiny } from '../../rh-components/rh-StatusIcon';
import {
  Button,
  SecondaryButton,
  NeutralButton,
  NegativeButton,
  ButtonHGroup,
  ButtonHRow,
  ButtonVGroup
} from '../../rh-components/rh-Button';
import {CourseFeatured} from './PortalCommonElements';
import { PortalPageTemplate } from './PortalPageTemplate';
import DonutChart from '../../rh-components/rh-DonutChart';

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
      <PortalPageTemplate>
        <Row className="background-greybars margin-bottom-triple padded">
          <Col width="9">
            <h1>Joe Learner</h1>
            <h2><strong>New hire</strong> senior consultant</h2>
          </Col>
          <Col width="3">
            <div className="margin-center">
              <DonutChart value={83} size={125} strokewidth={10}
                          valuelabel="Point Goal"
                          className="margin-center"/>
            </div>
          </Col>
        </Row>
        <h3>Actions</h3>
        <CardHGroup>
          <Card icon="television">You have <strong>1</strong> active learning channel.
            <NeutralButton hollow block className="margin-top-double">View</NeutralButton>
          </Card>
          <Card icon="calendar-o">You have <strong>3</strong> upcoming classes.
            <NeutralButton hollow block className="margin-top-double">View</NeutralButton>
          </Card>
          <Card icon="mouse-pointer">You have <strong>4</strong> in-progress learning activities.
            <NeutralButton hollow block className="margin-top-double">View</NeutralButton>
          </Card>
          <Card icon="linkedin-square">Import job and experience data from your LinkedIn profile.
            <NeutralButton hollow block className="margin-top-double">More</NeutralButton>
          </Card>
        </CardHGroup>
        <hr/>
        <h3 className="margin-top-double">Recommended based on your tags</h3>
        <p>Recommendations are based on your selected tags, course history and current channels.</p>
        <CardHGroup>
          <CourseFeatured tags={['FOSS','Atomic', 'OpenShift']}/>
          <CourseFeatured tags={['Sushi','Manager', 'Aspiring Leader']}/>
          <CourseFeatured tags={['RHEL','Atomic']}/>
        </CardHGroup>
        <div className="align-right">
          <NeutralButton text>View more ></NeutralButton>
        </div>
        <hr/>
        <h3 className="margin-top-double">People like you are taking these courses</h3>
        <p>Recommendations are based on your selected tags, course history and current channels.</p>
        <CardHGroup>
          <CourseFeatured tags={['FOSS','Atomic', 'OpenShift']}/>
          <CourseFeatured tags={['Sushi','Manager', 'Aspiring Leader']}/>
          <CourseFeatured tags={['RHEL','Atomic']}/>
        </CardHGroup>
        <div className="align-right">
          <NeutralButton text>View more ></NeutralButton>
        </div>
      </PortalPageTemplate>);
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