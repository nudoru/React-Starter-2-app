import React from 'react';
import Lorem from '../../../../../shared/utils/Lorem';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import {
  Card,
  CardHGroup,
  CardHGroupDecorative,
  CardHGroupTable,
  CardVGroup
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

const PortalUserSidebar = (props) => {
  return (<CardVGroup>
    <Card style="bars">
      <Row>
        <Col width="4"><IconCircleText label="JL" className="rh-icon-circle-text-big"/></Col>
        <Col>
          <h3 className="margin-none">Joe Learner</h3>
          <p>Senior Consultant</p>
          <hr/>
          <p><i className="fa fa-trophy" /> 123 Points<br/><em className="small">30 points to next level</em></p>
        </Col>
      </Row>
      <h5 className="margin-top-double margin-bottom">Your Tags <i className="fa fa-pencil"/></h5>
      <TagHGroup>
        <Tag><i className="fa fa-hashtag"/>FOSS</Tag>
        <Tag><i className="fa fa-hashtag"/>RHEL</Tag>
        <Tag><i className="fa fa-hashtag"/>OpenShift</Tag>
        <Tag><i className="fa fa-hashtag"/>Atomic</Tag>
        <Tag><i className="fa fa-hashtag"/>Aspiring Leader</Tag>
        <Tag><i className="fa fa-hashtag"/>Sushi</Tag>
      </TagHGroup>
      <h5 className="margin-top-double margin-bottom">Upcoming Classes</h5>
      <CardVGroup>
        <EventCard startDate="April 17, 2017" name={Lorem.title(4,6)}
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
        <EventCard startDate="May 9, 2017" name={Lorem.title(4,6)}
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
        <EventCard startDate="June 30, 2017" name={Lorem.title(4,6)}
                   city="Raleigh" country="US" room="RHT-01-02-03"/>
      </CardVGroup>
      <h5 className="margin-top-double margin-bottom">Inprogress Training</h5>
        <table className="rh-custom-table margin-none">
          <tr>
            <td><StatusIcon status="1"/></td>
            <td><a href="#">{Lorem.title(5,8)}</a></td>
          </tr>
          <tr>
            <td><StatusIcon status="1"/></td>
            <td><a href="#">{Lorem.title(5,8)}</a></td>
          </tr>
          <tr>
            <td><StatusIcon status="0"/></td>
            <td><a href="#">{Lorem.title(5,8)}</a></td>
          </tr>
          <tr>
            <td><StatusIcon status="0"/></td>
            <td><a href="#">{Lorem.title(5,8)}</a></td>
          </tr>
        </table>
    </Card>
  </CardVGroup>);
};

export default PortalUserSidebar;