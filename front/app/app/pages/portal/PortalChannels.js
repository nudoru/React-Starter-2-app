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

import PortalPageTemplate from './PortalPageTemplate';
import Hero from '../../rh-components/rh-Hero';

const ChannelCard = ({icon = 'television', title}) => {
  return (
    <Card style="bars">
      <h4 className="margin-bottom"><i
        className={'fa fa-' + icon + ' padding-right'}/>{title}</h4>
      <hr className="margin-none margin-bottom"/>
      <p>{Lorem.paragraph(3, 3)}</p>
      <div className="margin-top">
        <SecondaryButton>View Channel</SecondaryButton>
      </div>
    </Card>
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
    const channels = ['New Hire', 'Management', 'Information Technology', 'Sales', 'Marketing', 'Finance', 'People', 'Engineering', 'GWS'];

    return (
      <PortalPageTemplate>

        <h1>Explore Learning Channels</h1>
        <p>Learning channels present curated information and tasks targeted
          towards a specific learning need.</p>
        <p>You don't need to be in a specific role to join a channel - go an
          learn something new today!</p>
        <CardMasonry33Group>
          {channels.map(c => <ChannelCard title={c}/>)}
        </CardMasonry33Group>
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