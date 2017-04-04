import React from 'react';
import range from 'lodash/range'
import Lorem from '../../../../../shared/utils/Lorem';
import { connect } from 'react-redux';
import PageModule from '../../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../../rh-components/rh-Grid';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardFrame,
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
import Status from '../../rh-components/rh-Status';
import {
  Button,
  SecondaryButton,
  NeutralButton,
  NegativeButton,
  ButtonHGroup,
  ButtonHRow,
  ButtonVGroup
} from '../../rh-components/rh-Button';

const possibleTags = ['RHEL','Atomic','Spicy Tuna Roll','ODF','Wasabi','OpenShift','OpenStack'];

export const CourseCardMetadata = ({tags, stars}) => {
  tags = tags || Lorem.rItems(3, possibleTags);
  stars = stars || Lorem.rNumber(3,5);

  return (<div>
    <div><i
      className="fa fa-comments-o padding-right "/><a href="#">{Lorem.rNumber(20,50)} Reviews</a></div>
    <div className="rating-stars">
      {range(stars).map(s => <i className="fa fa-star"/>)}
    </div>
    <div className="padding-top">
      <TagHGroup>
        {tags.map(t => <Tag><i className="fa fa-hashtag"/>{t}</Tag>)}
      </TagHGroup>
    </div>
  </div>);
};

export const CourseFeatured = ({tags}) => {
  return (
    <Card style="bars">
      <div>
        <a href="#" className="body_alt">{Lorem.title(7, 15)}</a><br/>
        <div className="padding-top">
          <hr/>
          <CourseCardMetadata tags={tags} stars={Lorem.rNumber(3,5)}/>
        </div>
      </div>
    </Card>
  );
};

// This version is TOO noisy
//export const CourseFeatured = ({icon = 'cog', flag=0}) => {
//  return (
//    <CardFrame className='rh-card-bars'>
//      <CardHeader>
//        <h1>{Lorem.title(5, 10)}</h1>
//      </CardHeader>
//      <CardContent>
//        {flag ? <Status type="pass">You've completed this module.</Status> : null}
//        <p className="margin-top margin-bottom">{Lorem.paragraph(1, 2)}</p>
//        <hr/>
//        <CourseCardMetadata stars={5}/>
//      </CardContent>
//      <CardFooter>
//        <Button hollow block>Start <i className="padding-left fa fa-play-circle"/> </Button>
//      </CardFooter>
//    </CardFrame>
//  );
//};

export const CourseCard = ({icon = 'cog', flag=0}) => {
  return (
    <CardFrame className={flag ? 'rh-card-success' : 'rh-card-info'}>
      <CardHeader>
        <h1><i
          className={'fa fa-' + icon + ' padding-right'}/>{Lorem.title(5, 10)}</h1>
      </CardHeader>
      <CardContent>
        <p className="margin-top margin-bottom">{Lorem.paragraph(3, 5)}</p>
        <hr/>
        <CourseCardMetadata/>
      </CardContent>
      <CardFooter>
        {flag ? <Status type="pass">You've completed this module.</Status> : null}
        {flag ? <NeutralButton hollow block>Start <i className="padding-left fa fa-play-circle"/></NeutralButton> : <Button block>Start <i className="padding-left fa fa-play-circle"/></Button>}

      </CardFooter>
    </CardFrame>
  );
};

export const ChannelCard = ({icon = 'television', title, router}) => {
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


