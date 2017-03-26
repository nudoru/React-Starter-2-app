import React from 'react';
import Lorem from '../../../../shared/utils/Lorem';
import {connect} from 'react-redux';
import PageModule from '../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../rh-components/rh-Grid';
import {
  Card,
  CardHGroup,
  CardHGroupDecorative,
  CardHGroupTable,
  CardVGroup,
  CardMasonry33Group
} from '../rh-components/rh-Card';
import IconCircle from '../rh-components/rh-IconCircle';
import IconCircleText from '../rh-components/rh-IconCircleText';
import EventCard from '../rh-components/rh-EventCard';
import {
  BlockLinkHGroup,
  BlockLinkVGroup,
  BlockLink
} from '../rh-components/rh-BlockLinks';
import { TagHGroup, Tag } from '../rh-components/rh-Tag';
import { StatusIcon, StatusIconTiny } from '../rh-components/rh-StatusIcon';


const UserColumn = () => {
  return (<CardVGroup>
    <Card style="bars">
      <Row>
        <Col width="4"><IconCircleText label="JL" className="rh-icon-circle-text-big"/></Col>
        <Col>
          <h4 className="margin-none">Joe Learner</h4>
          <p>Senior Consultant</p>
        </Col>
      </Row>
      <h5 className="margin-top-double">Upcoming Classes</h5>
      <CardVGroup>
        <EventCard startDate="December 17, 2016" name="RHEL Fundamentals"
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
        <EventCard startDate="March 17, 2017" name="RHEL Fundamentals"
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
        <EventCard startDate="March 17, 2017" name="RHEL Fundamentals"
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
      </CardVGroup>
      <h5 className="margin-top-double">Inprogress Training</h5>
      <table className="rh-custom-table table-small">
        <thead>
        <tr>
          <td>Status</td>
          <td>Title</td>
        </tr>
        </thead>
        <tr>
          <td><StatusIconTiny status="1"/></td>
          <td>{Lorem.sentence(3,5)}</td>
        </tr>
        <tr>
          <td><StatusIconTiny status="1"/></td>
          <td>{Lorem.sentence(3,5)}</td>
        </tr>
        <tr>
          <td><StatusIconTiny status="0"/></td>
          <td>{Lorem.sentence(3,5)}</td>
        </tr>
        <tr>
          <td><StatusIconTiny status="0"/></td>
          <td>{Lorem.sentence(3,5)}</td>
        </tr>
      </table>
    </Card>
  </CardVGroup>);
};

class TemplatePage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  /*
  this.props.history
   - action, createHref, go, goBack, goForward, listen passed from React-Router
  this.props.location
    - hash, key, pathname, search passed from React-Router
  this.props.match
     - isExact, params, path, url passed from React-Router
   */
  componentDidMount() {
    console.log('Template page, ',this.props)
  }

  render() {
    return (
      <div>
        <PageModule>
          <Row>
            <Col className="padding-right-double">
              <h2>Portal page</h2>
              <p>Regardless of your role, location, or organization, Red Hat University gives you access to the learning and development (L+D) experiences you need to thrive in your career and help Red Hat succeed. It's easy to find the learning you need, when you need it.  You can search by:</p>
              <ul>
                <li>Organization (Sales and Services, Products and Technology, Corporate Functions)</li>
                <li>Category (professional, management, sales, technical)</li>
                <li>Location (Americas, EMEA, APAC)</li>
                <li>By date (for instructor led offerings)</li>
                <li>Peer-Trusted Learning (Open Learning Community)</li>
              </ul>
              <h3>Learning News</h3>
              <table className="rh-custom-table table-small margin-bottom-double">
                <thead>
                <tr>
                  <td></td>
                  <td>Title</td>
                  <td>Date</td>
                </tr>
                </thead>
                <tr>
                  <td><IconCircle icon="newspaper-o" size="s"/></td>
                  <td><a href="#">{Lorem.sentence(5,20)}</a>
                    <TagHGroup>
                      <Tag><i className="fa fa-hashtag"/>RHEL</Tag>
                    </TagHGroup></td>
                  <td>March 24, 2017</td>
                </tr>
                <tr>
                  <td><IconCircle icon="newspaper-o" size="s"/></td>
                  <td><a href="#">{Lorem.sentence(5,20)}</a>
                    <TagHGroup>
                      <Tag><i className="fa fa-hashtag"/>Atomic</Tag>
                      <Tag><i className="fa fa-hashtag"/>OpenShift</Tag>
                    </TagHGroup></td>
                  <td>March 24, 2017</td>
                </tr>
                <tr>
                  <td><IconCircle icon="newspaper-o" size="s"/></td>
                  <td><a href="#">{Lorem.sentence(5,20)}</a>
                    <TagHGroup>
                      <Tag><i className="fa fa-hashtag"/>Managers</Tag>
                      <Tag><i className="fa fa-hashtag"/>Personal Dev</Tag>
                    </TagHGroup></td>
                  <td>March 24, 2017</td>
                </tr>
                <tr>
                  <td><IconCircle icon="newspaper-o" size="s"/></td>
                  <td><a href="#">{Lorem.sentence(5,20)}</a>
                    <TagHGroup>
                      <Tag><i className="fa fa-hashtag"/>Sales</Tag>
                      <Tag><i className="fa fa-hashtag"/>Technical</Tag>
                    </TagHGroup>
                  </td>
                  <td>March 24, 2017</td>
                </tr>
              </table>
              <h3>Explore Learning Channels</h3>
              <CardMasonry33Group>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>New Hire</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Management</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Information Technology</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Sales</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Marketing</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Finance</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>People</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>Engineering</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
                <Card style="bars">
                  <h4 className="margin-bottom"><i className="fa fa-television padding-right"/>GWS</h4>
                  <hr className="margin-none margin-bottom"/>
                  <p>{Lorem.paragraph(1,2)}</p>
                </Card>
              </CardMasonry33Group>
              <h3 className="margin-top-double">More Resources</h3>
              <BlockLinkHGroup style="blue">
                <BlockLink label="Global Training Calendar" byline="Search for instructor-led training" link="#"/>
                <BlockLink label="Career Possibilities"
                           byline="Tips, tools and advice"
                           link="#"/>
              </BlockLinkHGroup>
            </Col>
            <Col width="4">
              <UserColumn/>
            </Col>
          </Row>

        </PageModule>
      </div>);
  }
}


TemplatePage.defaultProps = {};
TemplatePage.propTypes    = {};

const mapStateToProps = (state) => {
  return {
    config: state.config
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);