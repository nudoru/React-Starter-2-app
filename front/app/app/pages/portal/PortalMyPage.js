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
        <h3>Recommended</h3>
        <p>Recommendations are based on your selected tags, course history and current channels.</p>
        <CardHGroup>
          <Card style="bars">
            <div>
              <a href="#" className="body_alt">{Lorem.title(7, 15)}</a><br/>
              <div className="padding-top">
                <div><i
                  className="fa fa-comments"/> 23 Reviews </div>
                <div className="rating-stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star-half"/></div>

                <div className="padding-top">
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>FOSS</Tag>
                    <Tag><i className="fa fa-hashtag"/>Atomic</Tag>
                    <Tag><i className="fa fa-hashtag"/>OpenShift</Tag>
                  </TagHGroup>
                </div>
              </div>
            </div>
          </Card>
          <Card style="bars">
            <div>
              <a href="#" className="body_alt">{Lorem.title(7, 15)}</a><br/>
              <div className="padding-top">
                <div><i
                  className="fa fa-comments"/> 18 Reviews </div>
                <div className="rating-stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/></div>
                <div className="padding-top">
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>Sushi</Tag>
                    <Tag><i className="fa fa-hashtag"/>Manager</Tag>
                    <Tag><i className="fa fa-hashtag"/>Aspiring Leader</Tag>
                  </TagHGroup>
                </div>
              </div>
            </div>
          </Card>
          <Card style="bars">
            <div>
              <a href="#" className="body_alt">{Lorem.title(7, 15)}</a><br/>
              <div className="padding-top">
                <div className="padding-right-double"><i
                  className="fa fa-comments"/> 7 Reviews </div>
                <div className="rating-stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/><i
                  className="fa fa-star"/></div>
                <div className="padding-top">
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>Sushi</Tag>
                    <Tag><i className="fa fa-hashtag"/>Manager</Tag>
                    <Tag><i className="fa fa-hashtag"/>Aspiring Leader</Tag>
                  </TagHGroup>
                </div>
              </div>
            </div>
          </Card>
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