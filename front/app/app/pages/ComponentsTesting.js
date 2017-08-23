import React from 'react';
import Lorem from '../utils/Lorem';

import PageModule from '../rh-components/rh-PageModule';
import Breadcrumbs from '../rh-components/rh-Breadcrumbs';
import {
  Card,
  CardHGroup,
  CardHGroupDecorative,
  CardHGroupTable,
  CardVGroup
} from '../rh-components/rh-Card';
import DataTable from '../rh-components/rh-DataTable';
import { TabHGroup, Tab } from '../rh-components/rh-Tabs';
import Pagination from '../rh-components/rh-Pagination';
import Well from '../rh-components/rh-Well';
import IconCircle from '../rh-components/rh-IconCircle';
import IconCircleImage from '../rh-components/rh-IconCircleImage';
import IconCircleText from '../rh-components/rh-IconCircleText';
import { TagHGroup, TagVGroup, Tag } from '../rh-components/rh-Tag';
import { StatusIcon, StatusIconTiny } from '../rh-components/rh-StatusIcon';
import { Status, StatusLabel } from '../rh-components/rh-Status';
import Spinner from '../rh-components/rh-Spinner';
import ToolTip from '../rh-components/rh-ToolTip';
import Popupsimple from '../rh-components/rh-PopupSimple';
import ModalCover from '../rh-components/rh-ModalCover';
import ModalMessage from '../rh-components/rh-ModalMessage';
import ModalPanel from '../rh-components/rh-ModalPanel';
import PleaseWaitModal from '../rh-components/rh-PleaseWaitModal';
import LoginPanel from '../rh-components/rh-LoginPanel';
import Panel from '../rh-components/rh-Panel';
import EventCard from '../rh-components/rh-EventCard';
import {
  BlockLinkHGroup,
  BlockLinkVGroup,
  BlockLink
} from '../rh-components/rh-BlockLinks';
import { Grid, Row, Col } from '../rh-components/rh-Grid';
import {
  Button,
  SecondaryButton,
  NeutralButton,
  NegativeButton,
  ButtonHGroup,
  ButtonHRow,
  ButtonVGroup
} from '../rh-components/rh-Button';
import {
  VForm,
  HForm,
  FormGroup,
  FormHGroupRow,
  FormVGroup,
  FormHGroup,
  HInputDecorator,
  LabeledTextInput,
  Label,
  Radio,
  Checkbox,
  Select,
  SelectOption
} from '../rh-components/rh-Form';
import DonutChart from '../rh-components/rh-DonutChart';
import { AccordionVGroup } from '../rh-components/rh-Accordion';
import Accordion from '../rh-components/rh-Accordion';

const TextStyles = () => {
  return (
    <div>
      <h1>H1 {Lorem.text(2, 5)}</h1>
      <h2>H2 {Lorem.text(2, 5)}</h2>
      <h3>H3 {Lorem.text(2, 5)}</h3>
      <h4>H4 {Lorem.text(2, 5)}</h4>
      <h5>H5 {Lorem.text(2, 5)}</h5>
      <h6>H6 {Lorem.text(2, 5)}</h6>
      <p>Paragraph {Lorem.paragraph(5, 10)}</p>
      <p>Paragraph {Lorem.paragraph(5, 10)}</p>
      <pre>Pre {Lorem.text(5, 15)}</pre>
      <blockquote>Blockquote {Lorem.paragraph(5, 10)}</blockquote>
      <ul>
        <li>{Lorem.text(10, 30)}</li>
        <li>{Lorem.text(10, 30)}</li>
        <li>{Lorem.text(10, 30)}</li>
      </ul>
      <ol>
        <li>{Lorem.text(10, 30)}</li>
        <li>{Lorem.text(10, 30)}</li>
        <li>{Lorem.text(10, 30)}</li>
      </ol>
      <ul>
        <li>{Lorem.text(10, 20)}
          <ul>
            <li>{Lorem.text(10, 30)}</li>
            <li>{Lorem.text(10, 30)}</li>
            <li>{Lorem.text(10, 30)}</li>
          </ul>
        </li>
        <li>{Lorem.text(10, 20)}
          <ol>
            <li>{Lorem.text(10, 30)}</li>
            <li>{Lorem.text(10, 30)}</li>
            <li>{Lorem.text(10, 30)}</li>
          </ol>
        </li>
        <li>{Lorem.text(10, 30)}</li>
      </ul>
    </div>
  );
};

class ComponentsTesting extends React.Component {

  constructor () {
    super();
    this.state = {modal: false};
  }

  componentDidMount () {
  }

  _onButtonClick (e) {
    console.log('A button was clicked!', e);
  }

  _onModalClick (e) {
    console.log('Modal was clicked!', e);
    this.setState({modal: false});
  }

  render () {

    let tabledata = {
          headers: [
            {content: 'Col 1', sorted: 0, className: ''},
            {content: 'Col 2', sorted: 0, className: ''}
          ],
          data   : [
            [
              {content: 'Row 1, cell 1', link: '', newWindow: true},
              {content: 'Row 1, cell 2', link: '', newWindow: true}
            ],
            [
              {content: 'Row 2, cell 1', link: '', newWindow: true},
              {content: 'Row 2, cell 2', link: '', newWindow: true}
            ]
          ]
        },
        tableJson = [
          {
            'name'    : 'Strickland Zimmerman',
            'balance' : '$1,522.36',
            'age'     : 23,
            'eyeColor': 'brown',
            'gender'  : 'male',
            'company' : 'SECURIA'
          },
          {
            'name'    : 'Hughes Obrien',
            'balance' : '$3,967.97',
            'age'     : 22,
            'eyeColor': 'blue',
            'gender'  : 'male',
            'company' : 'GEEKY'
          },
          {
            'name'    : 'Ortiz Burris',
            'balance' : '$3,703.80',
            'age'     : 29,
            'eyeColor': 'green',
            'gender'  : 'male',
            'company' : 'PYRAMI'
          },
          {
            'name'    : 'Deanna Peterson',
            'balance' : '$1,891.08',
            'age'     : 25,
            'eyeColor': 'blue',
            'gender'  : 'female',
            'company' : 'GEEKETRON'
          },
          {
            'name'    : 'Mayra Estrada',
            'balance' : '$1,910.12',
            'age'     : 34,
            'eyeColor': 'green',
            'gender'  : 'female',
            'company' : 'QUILK'
          },
          {
            'name'    : 'Villarreal Mooney',
            'balance' : '$2,183.56',
            'age'     : 28,
            'eyeColor': 'blue',
            'gender'  : 'male',
            'company' : 'FIBRODYNE'
          }
        ];

    /*
     <ModalCover visible={this.state.modal} dismissible={true} dismissFunc={this._onModalClick.bind(this)}/>

     <PleaseWaitModal message="Reticulating splines"/>
     <LoginPanel/>

     <ModalMessage message={{title:"Hello"}}><p>Paragraph {Lorem.paragraph(5, 10)}</p></ModalMessage>

     <ModalPanel panel={{title:'Ima control panel!', icon:"cog", footerNote:"Status!",
     utilityButtons:[
     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-wrench"/></button>,
     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-comment"/></button>,
     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-close"/></button>
     ],
     actionButtons:[<button className="rh-button rh-button-text">
     Primary</button>,
     <button className="rh-button rh-button-text-secondary">
     Secondary</button>,
     <button className="rh-button rh-button-text-neutral">
     Neutral</button>]}}>
     <h1>H1 {Lorem.text(2, 5)}</h1>
     <p>Paragraph {Lorem.paragraph(5, 10)}</p>
     <p>Paragraph {Lorem.paragraph(5, 10)}</p>
     </ModalPanel>

     <div className="page-container">
     <Breadcrumbs crumbs={[{label: 'Home', route: '/'}, {
     label: 'Subpage',
     route: '/one'
     }, {label: 'This page'}]}/>
     </div>
     */

    return (
      <div>
        <PageModule style="full-homepage">
          <h1>Hello</h1>
          <h3>Let's take a look at some components! Scroll down ...</h3>
          <IconCircle center icon="arrow-down"/>
        </PageModule>
        <PageModule style="white">
          <h1>Testing Page for Reusable Components</h1>
          <TabHGroup>
            <Tab active={true} label="Tab One"/>
            <Tab active={false} label="Tab Two"
                 onClick={this._onButtonClick.bind(this)}/>
            <Tab active={false} label="Tab Three"
                 onClick={this._onButtonClick.bind(this)}/>
          </TabHGroup>
          <hr/>
          <Well>
            <h1>Flex Grid - 12 column</h1>
            <Grid>
              <Row>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
              </Row>
              <Row>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="1">
                  <div className="fxgrid-test-box">1</div>
                </Col>
                <Col width="2">
                  <div className="fxgrid-test-box">2</div>
                </Col>
                <Col width="2">
                  <div className="fxgrid-test-box">2</div>
                </Col>
                <Col width="6">
                  <div className="fxgrid-test-box">6</div>
                </Col>
              </Row>
              <Row>
                <Col width="3">
                  <div className="fxgrid-test-box">3</div>
                </Col>
                <Col width="3">
                  <div className="fxgrid-test-box">3</div>
                </Col>
                <Col width="2">
                  <div className="fxgrid-test-box">2</div>
                </Col>
                <Col width="4">
                  <div className="fxgrid-test-box">4</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="fxgrid-test-box">Auto</div>
                </Col>
                <Col>
                  <div className="fxgrid-test-box">Auto</div>
                </Col>
                <Col>
                  <div className="fxgrid-test-box">Auto</div>
                </Col>
              </Row>
            </Grid>
            <p className="margin-top-double">Modifies for rows and columns:
              offsets, auto, alignment, top, middle, bottom, around, between,
              first, last and reverse. Refer to docs.</p>
            <p>Grid from <a href="http://flexboxgrid.com/">http://flexboxgrid.com/</a>
            </p>
          </Well>
          <Well>
            <h1>Misc</h1>
            <CardHGroup>
              <EventCard startDate="December 17, 2016" name="RHEL Fundamentals"
                         city="Raleigh" country="US" room="RHT-01-02-03"/>
              <EventCard startDate="March 17, 2017" name="RHEL Fundamentals"
                         city="Raleigh" country="US" room="RHT-01-02-03"/>
              <EventCard startDate="March 17, 2017" name="RHEL Fundamentals"
                         city="Raleigh" country="US" room="RHT-01-02-03"/>
            </CardHGroup>
            <BlockLinkHGroup>
              <BlockLink label="Open Decision Framework"
                         byline="Bring together ideas and best practices"
                         link="#"/>
              <BlockLink label="Crucial Conversations"
                         byline="Tools for talking when stakes are high"
                         link="#"/>
              <BlockLink label="Leading your Career" link="#"/>
            </BlockLinkHGroup>
            <BlockLinkHGroup style="shaded">
              <BlockLink label="Open Decision Framework"
                         byline="Bring together ideas and best practices"
                         link="#"/>
              <BlockLink label="Crucial Conversations" link="#"/>
              <BlockLink label="Leading your Career"
                         byline="Create a plan. Take action. Achieve goal."
                         link="#"/>
            </BlockLinkHGroup>
            <BlockLinkVGroup style="blue">
              <BlockLink label="Open Decision Framework" link="#"/>
              <BlockLink label="Crucial Conversations"
                         byline="Tools for talking when stakes are high"
                         link="#"/>
              <BlockLink label="Leading your Career"
                         byline="Create a plan. Take action. Achieve goal."
                         link="#"/>
            </BlockLinkVGroup>

          </Well>
          <Well>
            <h1>Buttons</h1>

            <ButtonHRow>
              <Button onClick={this._onButtonClick.bind(this)}>Default</Button>
              <SecondaryButton onClick={this._onButtonClick.bind(this)}>Secondary</SecondaryButton>
              <NeutralButton
                onClick={this._onButtonClick.bind(this)}>Neutral</NeutralButton>
              <Button disabled
                      onClick={this._onButtonClick.bind(this)}>Disabled</Button>
              <Button hollow>Button</Button>
              <SecondaryButton hollow>Button</SecondaryButton>
              <NeutralButton hollow>Button</NeutralButton>
              <Button text>Button</Button>
              <SecondaryButton text>Button</SecondaryButton>
              <NeutralButton text>Button</NeutralButton>
            </ButtonHRow>
            <ButtonHRow>
              <Button small>Button</Button>
              <SecondaryButton small>Button</SecondaryButton>
              <NeutralButton small>Button</NeutralButton>
              <Button small hollow>Button</Button>
              <SecondaryButton small
                               hollow>Button</SecondaryButton>
              <NeutralButton small
                             hollow>Button</NeutralButton>
              <Button small text>Button</Button>
              <SecondaryButton small
                               text>Button</SecondaryButton>
              <NeutralButton small text>Button</NeutralButton>
            </ButtonHRow>
            <ButtonHRow>
              <NegativeButton>Button</NegativeButton>
              <NegativeButton hollow>Button</NegativeButton>
              <NegativeButton text>Button</NegativeButton>
              <NegativeButton small>Button</NegativeButton>
            </ButtonHRow>
            <ButtonHRow>
              <Button icon><i className="fa fa-cog"/></Button>
              <SecondaryButton icon><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton icon><i
                className="fa fa-cog"/></NeutralButton>
              <Button icon hollow><i
                className="fa fa-cog"/></Button>
              <SecondaryButton icon hollow><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton icon hollow><i
                className="fa fa-cog"/></NeutralButton>
              <Button text icon><i
                className="fa fa-cog"/></Button>
              <SecondaryButton text icon><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton text icon><i
                className="fa fa-cog"/></NeutralButton>
            </ButtonHRow>
            <ButtonHRow>
              <Button small icon><i
                className="fa fa-cog"/></Button>
              <SecondaryButton small icon><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton small icon><i
                className="fa fa-cog"/></NeutralButton>
              <Button small icon hollow><i
                className="fa fa-cog"/></Button>
              <SecondaryButton small icon hollow><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton small icon hollow><i
                className="fa fa-cog"/></NeutralButton>
              <Button small text icon><i
                className="fa fa-cog"/></Button>
              <SecondaryButton small text icon><i
                className="fa fa-cog"/></SecondaryButton>
              <NeutralButton small text icon><i
                className="fa fa-cog"/></NeutralButton>
            </ButtonHRow>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <ButtonVGroup>
                      <Button>Button</Button>
                      <SecondaryButton>Button</SecondaryButton>
                      <NeutralButton>Button</NeutralButton>
                    </ButtonVGroup>
                  </Col>
                  <Col>
                    <ButtonVGroup>
                      <Button icon><i className="fa fa-cog"/></Button>
                      <SecondaryButton icon><i
                        className="fa fa-cog"/></SecondaryButton>
                      <NeutralButton icon><i
                        className="fa fa-cog"/></NeutralButton>
                    </ButtonVGroup>
                  </Col>
                </Row>

              </Col>
              <Col width="8">
                <ButtonHGroup>
                  <Button>Button</Button>
                  <SecondaryButton>Button</SecondaryButton>
                  <NeutralButton>Button</NeutralButton>
                </ButtonHGroup>
                <ButtonHGroup>
                  <Button small>Button</Button>
                  <SecondaryButton small>Button</SecondaryButton>
                  <NeutralButton small>Button</NeutralButton>
                </ButtonHGroup>
                <ButtonHGroup>
                  <Button icon><i className="fa fa-cog"/></Button>
                  <SecondaryButton icon><i
                    className="fa fa-cog"/></SecondaryButton>
                  <NeutralButton icon><i
                    className="fa fa-cog"/></NeutralButton>
                </ButtonHGroup>
              </Col>
            </Row>
            <Button block onClick={this._onButtonClick.bind(this)}>Block
              Button</Button>
          </Well>
          <Well>
            <h1>Icons</h1>
            <div className="rh-icon-horizontal-group">
              <IconCircle icon="coffee"/>
              <IconCircle icon="code"/>
              <IconCircle icon="hand-spock-o"/>
              <IconCircleText label="This"/>
              <IconCircleText label="Is"/>
              <IconCircleText label="The"/>
              <IconCircleText label="Label"/>
            </div>
            <p className="margin-top-double">Icons are from <a
              href="http://fontawesome.io/icons/">Font Awesome</a>. Newer
              icons (after v 4.6) are not included.</p>
          </Well>
          <Well>
            <h1>Donut Chart</h1>
            <Row className="fxgrid-row-center">
              <Col><DonutChart value={75} size={80} strokewidth={10}
                               valuelabel=""
                               className="rh-donutchart-success margin-center"/></Col>
              <Col>Complete</Col>

              <Col><DonutChart value={20} size={80} strokewidth={10}
                               valuelabel=""
                               className="margin-center"/></Col>
              <Col>In progress</Col>

              <Col><DonutChart value={5} size={80} strokewidth={10}
                               valuelabel=""
                               className="rh-donutchart-warning margin-center"/></Col>
              <Col>Not started</Col>
              <Col><DonutChart value={42} size={100} strokewidth={20}
                               valuelabel="Boom"
                               className="rh-donutchart-danger margin-center"/></Col>
              <Col>Explosions</Col>
            </Row>
          </Well>
          <Well>
            <h1>Spinner</h1>
            <Spinner type="spinner-xlg"/>
            <Spinner type="spinner-lg"/>
            <Spinner/>
            <Spinner type="spinner-sm"/>
            <Spinner type="spinner-xs"/>
            <Spinner type="spinner-inverse"/>
          </Well>
          <Well>
            <h1>Tags</h1>
            <p>Horizontal group</p>
            <TagHGroup>
              <Tag><i className="fa fa-hashtag"/>Foo</Tag>
              <Tag><i className="fa fa-tag"/>Bar</Tag>
              <Tag><i className="fa fa-tags"/>This bar <em>that quaz</em> like a
                foo</Tag>
              <Tag>Qiz</Tag>
            </TagHGroup>
            <p>Vertical group</p>
            <TagVGroup>
              <Tag><i className="fa fa-hashtag"/>Foo</Tag>
              <Tag><i className="fa fa-tag"/>Bar</Tag>
              <Tag><i className="fa fa-tags"/>This bar <em>that quaz</em> like a
                foo</Tag>
            </TagVGroup>
          </Well>
          <Well>
            <h1>Tool-tips</h1>
            <h4>CSS only tool-tips based on hint.css</h4>
            <ul className="listing">
              <li><ToolTip position="top" label="I'm a tool-tip!">On the
                top</ToolTip></li>
              <li><ToolTip position="bottom" label="I'm a tool-tip!">On the
                bottom</ToolTip></li>
              <li><ToolTip position="left" label="I'm a tool-tip!">On the
                left</ToolTip></li>
              <li><ToolTip position="right" label="I'm a tool-tip!">On the
                right</ToolTip></li>
              <li><ToolTip position="top-left" label="I'm a tool-tip!">On the
                top left</ToolTip></li>
              <li><ToolTip position="top-right" label="I'm a tool-tip!">On the
                top right</ToolTip></li>
              <li><ToolTip position="bottom-left" label="I'm a tool-tip!">On the
                bottom left</ToolTip></li>
              <li><ToolTip position="bottom-right" label="I'm a tool-tip!">On
                the bottom right</ToolTip></li>
            </ul>
          </Well>
          <Well>
            <h1>Status Icons</h1>
            <StatusIcon type="none"/>
            <StatusIcon type="inprogress"/>
            <StatusIcon type="danger"/>
            <StatusIcon type="success"/>
            <StatusIcon type="pending"/>
            <StatusIconTiny type="none"/>
            <StatusIconTiny type="inprogress"/>
            <StatusIconTiny type="danger"/>
            <StatusIconTiny type="success"/>
            <StatusIconTiny type="pending"/>
            <StatusLabel>Status!</StatusLabel>
            <StatusLabel type="info">Status!</StatusLabel>
            <StatusLabel type="success">Status!</StatusLabel>
            <StatusLabel type="warning">Status!</StatusLabel>
            <StatusLabel type="danger">Status!</StatusLabel>
            <Status>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</Status>
            <Status type="info">About that something ... </Status>
            <Status type="success">Lorem Ipsum is simply dummy text of the
              printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</Status>
            <Status type="warning">Something might go wrong ...</Status>
            <Status type="danger">Something blew up!</Status>
          </Well>
          <hr/>
          <h1>Card groups</h1>
          <CardHGroupDecorative>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardHGroupDecorative>
          <hr/>
          <CardHGroup>
            <Card title="CTA Card"
                  icon="star" cta="Read more"
                  onClick={this._onButtonClick.bind(this)}>
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="shaded"
                  icon="star">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="dark"
                  icon="star">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardHGroup>
          <hr/>
          <CardHGroupTable>
            <Card title="Title" style="dark">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="dark">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardHGroupTable>
          <Pagination start={1} end={4} current={2} next={false}
                      prev={false}/>
          <hr/>
          <CardVGroup>
            <Card title="Title" style="dark">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="dark">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardVGroup>
        </PageModule>
        <PageModule title="Accordions" headline="">
          <div>
            <Accordion title='Foo!!!' active={false}
                       className='rh-accordion-shadows'>
              <Card title="Title" style="dark">
                <p>{Lorem.paragraph(3, 7)}</p>
              </Card>
            </Accordion>
          </div>
        </PageModule>
        <PageModule title="Panels" headline="">
          <div>
            <h1>Panel</h1>
            <Panel title='Ima control panel!' icon="cog" footerNote="Status!"
                   utilityButtons={[
                     <button key="aba"
                             className="rh-button rh-button-text-neutral rh-button-icon">
                       <i className="fa fa-wrench"/></button>,
                     <button key="abb"
                             className="rh-button rh-button-text-neutral rh-button-icon">
                       <i className="fa fa-comment"/></button>,
                     <button key="abc"
                             className="rh-button rh-button-text-neutral rh-button-icon">
                       <i className="fa fa-close"/></button>
                   ]}
                   actionButtons={[<button key="uba"
                                           className="rh-button rh-button-text">
                     Primary</button>,
                     <button key="ubb"
                             className="rh-button rh-button-text-secondary">
                       Secondary</button>,
                     <button key="ubc"
                             className="rh-button rh-button-text-neutral">
                       Neutral</button>]}>
              <h1>H1 {Lorem.text(2, 5)}</h1>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
            </Panel>
            <h4>No footer</h4>
            <Panel title='Ima control panel!'>
              <h1>H1 {Lorem.text(2, 5)}</h1>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
            </Panel>
            <h4>No header</h4>
            <Panel footerNote="Status!">
              <h1>H1 {Lorem.text(2, 5)}</h1>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
              <p>Paragraph {Lorem.paragraph(5, 10)}</p>
            </Panel>
          </div>
          <Well>
            <h1>Pop ups (Simple)</h1>
            <Row>
              <Col>
                <Popupsimple title="Hello!" icon="comment">
                  <p>{Lorem.paragraph(3, 7)}</p>
                </Popupsimple>
              </Col>
              <Col>
                <Popupsimple title="Hello!" buttonLabel='Click me'
                             buttonOnClick={this._onButtonClick.bind(this)}>
                  <p>{Lorem.paragraph(3, 7)}</p>
                </Popupsimple>
              </Col>
              <Col>
                <Popupsimple title="Oh no .." buttonLabel='Click me'
                             buttonOnClick={this._onButtonClick.bind(this)}
                             error={true}>
                  <p>{Lorem.paragraph(3, 7)}</p>
                </Popupsimple>
              </Col>
            </Row>

          </Well>
        </PageModule>
        <PageModule style="shaded" title="Tables" headline="">
          <p>Interactive, sortable table headings</p>
          <DataTable jsonData={tableJson} hover={true}/>
          <hr/>
          <p>Customizable table for more flexibility</p>
          <table className="rh-custom-table">
            <thead>
            <tr>
              <td>Progress</td>
              <td>Activity</td>
              <td>Completion</td>
              <td>Description</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
            </tbody>
          </table>
        </PageModule>
        <PageModule style="bars" title="" headline="">
          <TextStyles/>
        </PageModule>
        <PageModule style="red" title="Module Title" headline="Module Headline">
          <TextStyles/>
        </PageModule>
        <PageModule style="blue" title="Module Title"
                    headline="Module Headline">
          <TextStyles/>
        </PageModule>
        <PageModule style="dark" title="Module Title"
                    headline="Module Headline">
          <TextStyles/>
        </PageModule>
      </div>
    );
  }
}

ComponentsTesting.propTypes = {};

export default ComponentsTesting;