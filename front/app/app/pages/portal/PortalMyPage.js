import React from 'react';
import Lorem from '../../../../../shared/utils/Lorem';
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
import Hero from '../../rh-components/rh-Hero';

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
        <h3>Recommended based on your tags</h3>
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
        <h3 className="padding-top">People like you are taking these courses</h3>
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