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
        <Hero>
          <h1>Welcome</h1>
          <p>{Lorem.paragraph(3, 3)}</p>
          <NegativeButton hollow>Learn more</NegativeButton>
        </Hero>
        <p>Regardless of your role, location, or organization, Red Hat
          University gives you access to the learning and development (L+D)
          experiences you need to thrive in your career and help Red Hat
          succeed. It's easy to find the learning you need, when you need
          it.</p>
        <ul>
          <li>Organization (Sales and Services, Products and Technology,
            Corporate Functions)
          </li>
          <li>Category (professional, management, sales, technical)</li>
          <li>Location (Americas, EMEA, APAC)</li>
          <li>By date (for instructor led offerings)</li>
          <li>Peer-Trusted Learning (Open Learning Community)</li>
        </ul>
        <h4>You might like this ...</h4>
        <table className="rh-custom-table margin-bottom-double">
          <tr>
            <td><IconCircle icon="mouse-pointer" size="s"/></td>
            <td>
              <a href="#" className="body_alt">{Lorem.title(7,15)}</a><br/>
              <div className="padding-top">
                <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star-half"/></span>
                <span className="padding-left-double"><i
                  className="fa fa-comments"/> 23 Reviews </span>
                <div>
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>FOSS</Tag>
                    <Tag><i className="fa fa-hashtag"/>Atomic</Tag>
                    <Tag><i className="fa fa-hashtag"/>OpenShift</Tag>
                  </TagHGroup>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><IconCircle icon="book" size="s"/></td>
            <td>
              <a href="#" className="body_alt">{Lorem.title(7,15)}</a><br/>
              <div className="padding-top">
                <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star"/></span>
                <span className="padding-left-double"><i
                  className="fa fa-comments"/> 18 Reviews </span>
                <div>
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>Sushi</Tag>
                    <Tag><i className="fa fa-hashtag"/>Manager</Tag>
                    <Tag><i className="fa fa-hashtag"/>Aspiring Leader</Tag>
                  </TagHGroup>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><IconCircle icon="desktop" size="s"/></td>
            <td>
              <a href="#" className="body_alt">{Lorem.title(7,15)}</a><br/>
              <div className="padding-top">
                <span><i className="fa fa-star"/><i
                  className="fa fa-star"/><i className="fa fa-star"/><i
                  className="fa fa-star-half"/></span>
                <span className="padding-left-double"><i
                  className="fa fa-comments"/> 3 Reviews </span>
                <div>
                  <TagHGroup>
                    <Tag><i className="fa fa-hashtag"/>RHEL</Tag>
                  </TagHGroup>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <div className="align-right">
          <NeutralButton text>View more ></NeutralButton>
        </div>
        <h3 className="margin-top-double">What's New</h3>
        <Row>
          <Col className="padding-right">
            <h4>Posts</h4>
            <table className="rh-custom-table margin-bottom-double">
              <tr>
                <td><IconCircle icon="newspaper-o" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
              <tr>
                <td><IconCircle icon="newspaper-o" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
              <tr>
                <td><IconCircle icon="newspaper-o" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
              <tr>
                <td><IconCircle icon="newspaper-o" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
            </table>
            <div className="align-right">
              <NeutralButton text>View older ></NeutralButton>
            </div>
          </Col>
          <Col>
            <h4>New Courses</h4>
            <table className="rh-custom-table margin-bottom-double">
              <tr>
                <td><IconCircle icon="mouse-pointer" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
              <tr>
                <td><IconCircle icon="mouse-pointer" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
              <tr>
                <td><IconCircle icon="mouse-pointer" size="s"/></td>
                <td><a href="#">{Lorem.sentence(3, 7)}</a></td>
                <td>{Lorem.date().string}</td>
              </tr>
            </table>
          </Col>
        </Row>

        <h3 className="margin-top-double">More Resources</h3>
        <BlockLinkHGroup style="blue">
          <BlockLink label="Global Training Calendar"
                     byline="Search for instructor-led training" link="#"/>
          <BlockLink label="Career Possibilities"
                     byline="Tips, tools and advice"
                     link="#"/>
        </BlockLinkHGroup>
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