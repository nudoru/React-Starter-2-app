import React from 'react';
import Lorem from '../../utils/Lorem';
import { connect } from 'react-redux';
import { Col, Row } from '../../rh-components/rh-Grid';
import { CardHGroup } from '../../rh-components/rh-Card';
import IconCircle from '../../rh-components/rh-IconCircle';
import { BlockLink, BlockLinkHGroup } from '../../rh-components/rh-BlockLinks';
import { NegativeButton, NeutralButton } from '../../rh-components/rh-Button';

import { PortalPageTemplate } from './PortalPageTemplate';
import Hero from '../../rh-components/rh-Hero';

import { CourseFeatured } from './PortalCommonElements';

const HomeHero = () => {
  return (<Hero>
    <h1>Welcome</h1>
    <p>{Lorem.paragraph(3, 3)}</p>
    <NegativeButton hollow>Learn more</NegativeButton>
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
      <PortalPageTemplate hero={<HomeHero/>}>

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
        <h3>Recommended</h3>
        <p>Recommendations are based on your selected tags, course history and
          current channels.</p>
        <CardHGroup>
          <CourseFeatured tags={['FOSS', 'Atomic', 'OpenShift']}/>
          <CourseFeatured tags={['Sushi', 'Manager', 'Aspiring Leader']}/>
          <CourseFeatured tags={['RHEL', 'Atomic']}/>
        </CardHGroup>
        <div className="align-right">
          <NeutralButton text>View more ></NeutralButton>
        </div>
        <h3 className="margin-top-double">What's New</h3>
        <Row>
          <Col className="padding-right">
            <h4>Posts</h4>
            <table className="rh-custom-table margin-bottom-double">
              <tbody>
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
              </tbody>
            </table>
            <div className="align-right">
              <NeutralButton text>View older ></NeutralButton>
            </div>
          </Col>
          <Col>
            <h4>New Courses</h4>
            <table className="rh-custom-table margin-bottom-double">
              <tbody>
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
              </tbody>
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