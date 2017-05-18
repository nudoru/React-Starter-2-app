import React from 'react';
import { connect } from 'react-redux';
import PageModule from '../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../rh-components/rh-Grid';
import { Card, CardVGroup } from '../rh-components/rh-Card';
import {
  BlockLinkHGroup,
  BlockLinkVGroup,
  BlockLink
} from '../rh-components/rh-BlockLinks';
import { TagHGroup, Tag } from '../rh-components/rh-Tag';
import DonutChart from '../rh-components/rh-DonutChart';
import { AccordionVGroup } from '../rh-components/rh-Accordion';
import Accordion from '../rh-components/rh-Accordion';
import { StatusIcon, StatusIconTiny } from '../rh-components/rh-StatusIcon';
import Lorem from '../utils/Lorem';
import {
  VForm,
  HForm,
  FormGroup,
  FormHGroupRow,
  FormVGroup,
  FormHGroup,
  HInputDecorator,
  Label,
  TextInput,
  Datalist,
  DatalistOption,
  TextArea,
  DropDown,
  ListBox,
  Option,
  CheckGroup,
  Checkbox,
  RadioGroup,
  Radio
} from '../rh-components/rh-Form';
import Well from '../rh-components/rh-Well';
import {Status, StatusLabel} from '../rh-components/rh-Status';

const NAMES = ['Yanick Swati', 'Verginia Eadberht', 'Lamis Flaviana', 'Miltiades Ratan', 'Gorgi Carlisa', 'Aljoša Chloé', 'Rhea Perttu', 'Marcia Rut', 'Sindri Ji-Hoon', 'Björn Perpetua', 'Yanick Swati', 'Verginia Eadberht', 'Lamis Flaviana', 'Miltiades Ratan', 'Gorgi Carlisa', 'Aljoša Chloé', 'Rhea Perttu', 'Marcia Rut', 'Sindri Ji-Hoon', 'Björn Perpetua', 'Yanick Swati', 'Verginia Eadberht', 'Lamis Flaviana', 'Miltiades Ratan', 'Gorgi Carlisa', 'Aljoša Chloé', 'Rhea Perttu', 'Marcia Rut', 'Sindri Ji-Hoon', 'Björn Perpetua'];

const DemoTable = ({name}) => (<div className="padded">
  <Card style="bars">
    <Row className="fxgrid-row-center">
      <Col><h2>Status For {name}</h2>
        <p>2 of 5 activities completed</p></Col>
      <Col width="2"><DonutChart value={40} size={80} strokewidth={5}
                                 valuelabel="Complete"
                                 className="rh-donutchart-success margin-center"/></Col>
    </Row>
    <hr/>
    <table className="rh-custom-table">
      <thead>
      <tr>
        <td>Activity Name</td>
        <td>Status</td>
        <td>Completed On</td>
      </tr>
      </thead>
      <tr>
        <td>{Lorem.title(5, 10)}</td>
        <td><StatusIcon type="success"/></td>
        <td>5/1/17</td>
      </tr>
      <tr>
        <td>{Lorem.title(5, 10)}</td>
        <td><StatusIcon type="success"/></td>
        <td>5/1/17</td>
      </tr>
      <tr>
        <td>{Lorem.title(5, 10)}</td>
        <td><StatusIcon type="inprogress"/></td>
        <td>-</td>
      </tr>
      <tr>
        <td>{Lorem.title(5, 10)}</td>
        <td><StatusIcon type="none"/></td>
        <td>-</td>
      </tr>
      <tr>
        <td>{Lorem.title(5, 10)}</td>
        <td><StatusIcon type="none"/></td>
        <td>-</td>
      </tr>
    </table>
  </Card>
</div>);

const RowTitle = ({name}) => (
  <ul className="rh-accordion-header-label-list">
    <li className="f1 padding-left"><em>{name}</em>, Sales Consultant</li>
    <li>40%: 2 of 5 Complete</li>
    <li><StatusLabel type="info" icon="refresh">In progress</StatusLabel></li>
  </ul>);

class ReportingPage extends React.Component {

  constructor (props) {
    super(props);
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
  componentDidMount () {
    console.log('Template page, ', this.props);
  }

  render () {
    let filterForm = (<VForm>
      <fieldset>
        <Row>
          <Col className="padding-right"><TextInput label="Name"/></Col>
          <Col className="padding-left"><DropDown label="Status">
            <Option value="1">None</Option>
            <Option value="2">Some</Option>
            <Option value="3">All</Option>
          </DropDown></Col>
        </Row>
      </fieldset>
    </VForm>);

    return (
      <div>
        <PageModule className="padding-none">
          <div className="color-bg-body">
            <Row>
              <Col className="padded">
                <Card title='MWC Team Status Report' hControls={filterForm}>

                  <Card className='margin-bottom-double'>
                    <Row className="fxgrid-row-center">
                      <Col><DonutChart value={75} size={80} strokewidth={10}
                                       valuelabel=""
                                       className="rh-donutchart-success margin-center"/></Col>
                      <Col>Complete</Col>

                      <Col><DonutChart value={20} size={80} strokewidth={5}
                                       valuelabel=""
                                       className="margin-center"/></Col>
                      <Col>In progress</Col>

                      <Col><DonutChart value={5} size={80} strokewidth={5}
                                       valuelabel=""
                                       className="rh-donutchart-warning margin-center"/></Col>
                      <Col>Not started</Col>
                    </Row>
                  </Card>

                  <AccordionVGroup>
                {
                  NAMES.map(name => (
                    <Accordion title={<RowTitle name={name}/>} active={false} className='rh-accordion-shadows'>
                      <DemoTable name={name}/>
                    </Accordion>))
                }
                  </AccordionVGroup>
                </Card>
              </Col>
              {/*<Col width="3" className="padding-top">*/}
              {/*<div className="padding-right">*/}
              {/*<CardVGroup>*/}
              {/*<Card>*/}
              {/*<h2>My Team Summary</h2>*/}
              {/*<Row className="fxgrid-row-center">*/}
              {/*<Col><DonutChart value={75} size={100} strokewidth={10}*/}
              {/*valuelabel=""*/}
              {/*className="rh-donutchart-success margin-center"/></Col>*/}
              {/*<Col>Complete</Col>*/}
              {/*</Row>*/}
              {/*<hr/>*/}
              {/*<Row className="fxgrid-row-center">*/}
              {/*<Col><DonutChart value={5} size={70} strokewidth={10}*/}
              {/*valuelabel=""*/}
              {/*className="rh-donutchart-warning margin-center"/></Col>*/}
              {/*<Col>Borderline</Col>*/}
              {/*</Row>*/}
              {/*<hr/>*/}
              {/*<Row className="fxgrid-row-center">*/}
              {/*<Col><DonutChart value={20} size={70} strokewidth={10}*/}
              {/*valuelabel=""*/}
              {/*className="rh-donutchart-danger margin-center"/></Col>*/}
              {/*<Col>Incomplete</Col>*/}
              {/*</Row>*/}
              {/*</Card>*/}
              {/*</CardVGroup>*/}
              {/*</div>*/}
              {/*</Col>*/}
            </Row>
          </div>
        </PageModule>
      </div>);
  }
}

ReportingPage.defaultProps = {};
ReportingPage.propTypes    = {};

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportingPage);