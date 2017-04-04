import React from 'react';
import { history } from 'react-router-dom';
import { connect } from 'react-redux';
import { CardMasonry50Group } from '../../rh-components/rh-Card';

import { PortalPageTemplate } from './PortalPageTemplate';
import { ChannelCard } from './PortalCommonElements';

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