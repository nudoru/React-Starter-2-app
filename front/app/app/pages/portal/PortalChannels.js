import React from 'react';
import {history} from 'react-router-dom';
import Lorem from '../../../../../shared/utils/Lorem';
import { connect } from 'react-redux';
import {
  CardHeader,
  CardContent,
  CardFooter,
  CardFrame,
  CardMasonry50Group
} from '../../rh-components/rh-Card';
import {
  SecondaryButton
} from '../../rh-components/rh-Button';

import { PortalPageTemplate } from './PortalPageTemplate';

const ChannelCard = ({icon = 'television', title, router}) => {
  return (
    <CardFrame>
      <CardHeader className="rh-card-header-dark-blue">
        <h1><i
          className={'fa fa-' + icon + ' padding-right'}/>{title}</h1>
      </CardHeader>
      <CardContent>
        <p>{Lorem.paragraph(3, 3)}</p>
      </CardContent>
      <CardFooter>
        <SecondaryButton hollow onClick={e => router.push('/channelpage')}>View Channel</SecondaryButton>
      </CardFooter>
    </CardFrame>
  );
};

//const onChannelClick = () => {
//  console.log('click!');
//  history.push('/barbaz');
//}

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
        <p>You don't need to be in a specific role to join a channel -
          learn something new today!</p>
        <CardMasonry50Group>
          {channels.map(c => <ChannelCard title={c} router={this.props.history}/>)}
        </CardMasonry50Group>
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