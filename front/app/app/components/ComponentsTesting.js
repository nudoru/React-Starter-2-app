import React from 'react';
import Lorem from '../../../../shared/utils/Lorem';

import PageModule from '../rh-components/rh-PageModule';
import Breadcrumbs from '../rh-components/rh-Breadcrumbs';
import CardGroup from '../rh-components/rh-CardGroup';
import CardIcon from '../rh-components/rh-CardIcon';
import Card from '../rh-components/rh-Card';
import Table from '../rh-components/rh-DataTable';
import Tabs from '../rh-components/rh-Tabs';
import Pagination from '../rh-components/rh-Pagination';
import ButtonGroup from '../rh-components/rh-ButtonGroup';
import Well from '../rh-components/rh-Well';
import IconCircle from '../rh-components/rh-IconCircle';
import IconCircleImage from '../rh-components/rh-IconCircleImage';
import IconCircleText from '../rh-components/rh-IconCircleText';
import {TagHGroup, Tag} from '../rh-components/rh-Tag';
import {StatusIcon, StatusIconTiny} from '../rh-components/rh-StatusIcon';

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

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {

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
            "name"    : "Strickland Zimmerman",
            "balance" : "$1,522.36",
            "age"     : 23,
            "eyeColor": "brown",
            "gender"  : "male",
            "company" : "SECURIA"
          },
          {
            "name"    : "Hughes Obrien",
            "balance" : "$3,967.97",
            "age"     : 22,
            "eyeColor": "blue",
            "gender"  : "male",
            "company" : "GEEKY"
          },
          {
            "name"    : "Ortiz Burris",
            "balance" : "$3,703.80",
            "age"     : 29,
            "eyeColor": "green",
            "gender"  : "male",
            "company" : "PYRAMI"
          },
          {
            "name"    : "Deanna Peterson",
            "balance" : "$1,891.08",
            "age"     : 25,
            "eyeColor": "blue",
            "gender"  : "female",
            "company" : "GEEKETRON"
          },
          {
            "name"    : "Mayra Estrada",
            "balance" : "$1,910.12",
            "age"     : 34,
            "eyeColor": "green",
            "gender"  : "female",
            "company" : "QUILK"
          },
          {
            "name"    : "Villarreal Mooney",
            "balance" : "$2,183.56",
            "age"     : 28,
            "eyeColor": "blue",
            "gender"  : "male",
            "company" : "FIBRODYNE"
          }
        ];


    return (
      <div>
        <div className="page-container">
          <Breadcrumbs crumbs={[{label: 'Home', route: '/'}, {
            label: 'Subpage',
            route: '/one'
          }, {label: 'This page'}]}/>
        </div>
        <PageModule style="white">
          <h1>Testing Page for Reusable Components</h1>
          <Tabs nav={[
            {label: 'Tab 1', route: '/', active: true},
            {label: 'Tab 2', route: '/one', active: false},
            {label: 'Tab 3', route: '/two', active: false}
          ]}/>
          <ButtonGroup nav={[
            {label: 'Button 1', route: '/', active: true},
            {label: 'Button 2', route: '/one', active: false},
            {label: 'Button 3', route: '/two', active: false}
          ]}/>
          <hr/>
          <div>

            <Well>
              <h2>Buttons</h2>
              <div className="rh-button-container-horiz">
                <button className="rh-button">Primary</button>
                <button className="rh-button rh-button-secondary">Secondary
                </button>
                <button className="rh-button rh-button-admin">Admin</button>
              </div>
            </Well>
          </div>
          <div>
            <Well>
              <h2>Icons</h2>
              <div className="rh-icon-horizontal-group">
              <IconCircle icon="coffee"/>
              <IconCircle icon="code"/>
              <IconCircle icon="hand-spock-o"/>
              <IconCircleText label="This"/>
              <IconCircleText label="Is"/>
              <IconCircleText label="The"/>
              <IconCircleText label="Label"/>
              </div>
              <p className="margin-top-double">Icons are from <a href="http://fontawesome.io/icons/">Font Awesome</a>. Newer icons (after v 4.6) are not included.</p>
            </Well>
          </div>
          <div>
            <Well>
              <h2>Tags</h2>
              <TagHGroup>
                <Tag>Foo</Tag>
                <Tag>Bar</Tag>
                <Tag>Qiz</Tag>
                <Tag>{Lorem.text(2, 7)}</Tag>
                <Tag>{Lorem.text(2, 7)}</Tag>
              </TagHGroup>
            </Well>
          </div>
          <div>
            <Well>
              <h2>Status Icons</h2>
              <StatusIcon status="0"/>
              <StatusIcon status="1"/>
              <StatusIcon status="2"/>
              <StatusIcon status="3"/>
              <StatusIcon status="4"/>
              <StatusIconTiny status="0"/>
              <StatusIconTiny status="1"/>
              <StatusIconTiny status="2"/>
              <StatusIconTiny status="3"/>
              <StatusIconTiny status="4"/>
            </Well>
          </div>
          <hr/>
          <h2>Card groups</h2>
          <CardGroup orientation="horizontal-decorative">
            <Card title="Title" style="bars" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardGroup>
          <hr/>
          <CardGroup orientation="horizontal">
            <CardIcon title="Title"
                      content="Content! Content! Content! Content! "
                      icon="star" cta="Read more" ctaRoute='/one'/>
            <CardIcon title="Title" style="shaded"
                      icon="star" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </CardIcon>
            <CardIcon title="Title" style="dark" content="Content!"
                      icon="star"
                      ctaRoute="/two"/>
          </CardGroup>
          <hr/>
          <CardGroup orientation="horizontal-table">
            <Card title="Title" style="dark" cta="Read more" ctaRoute='/one'>
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="dark" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
            <Card title="Title" style="bars" ctaRoute="/two">
              <p>{Lorem.paragraph(3, 7)}</p>
            </Card>
          </CardGroup>
          <Pagination start={1} end={4} current={2} next={false}
                      prev={false}/>
          <Well>
            <h2>Forms</h2>
            <Well>
              <form className="rh-form">
                <div className="rh-form-group">
                  <label htmlFor="input1">What's your name?</label>
                  <input type="text" placeholder="Type here" id="input1"/>
                </div>
                <div className="rh-form-group">
                  <label htmlFor="textarea1">What's your name?</label>
                  <textarea id="textarea1">Type here</textarea>
                </div>
                <div className="rh-form-group">
                  <label htmlFor="select1">How much?</label>
                  <select id="select1">
                    <option>None</option>
                    <option>Some</option>
                    <option>All</option>
                  </select>
                </div>
                <div className="rh-form-group">
                  <label>What's the best option?</label>
                  <label><input type="checkbox" id="cbox1"
                                value="first_checkbox"/> Option 1</label>
                  <label><input type="checkbox" id="cbox2"
                                value="first_checkbox"/> Option 2</label>
                  <label><input type="checkbox" id="cbox3"
                                value="first_checkbox"/> Option 3</label>
                </div>
                <div className="rh-form-group">
                  <label>What's the best option?</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 1</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 2</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 3</label>
                </div>
              </form>
            </Well>
            <h2>Inline</h2>
            <Well>
              <form className="rh-form-inline">
                <div className="rh-form-group">
                  <label htmlFor="input1">What's your name?</label>
                  <input type="text" placeholder="Type here" id="input1"/>
                </div>
                <div className="rh-form-group">
                  <label htmlFor="textarea1">What's your name?</label>
                  <textarea id="textarea1">Type here</textarea>
                </div>
                <div className="rh-form-group">
                  <label htmlFor="select1">How much?</label>
                  <select id="select1">
                    <option>None</option>
                    <option>Some</option>
                    <option>All</option>
                  </select>
                </div>
                <div className="rh-form-group">
                  <label>What's the best option?</label>
                  <label><input type="checkbox" id="cbox1"
                                value="first_checkbox"/> Option 1</label>
                  <label><input type="checkbox" id="cbox2"
                                value="first_checkbox"/> Option 2</label>
                  <label><input type="checkbox" id="cbox3"
                                value="first_checkbox"/> Option 3</label>
                </div>
                <div className="rh-form-group">
                  <label>What's the best option?</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 1</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 2</label>
                  <label><input type="radio" name="options"
                                value="first_checkbox"/> Option 3</label>
                </div>
              </form>
            </Well>
          </Well>
        </PageModule>
        <PageModule style="shaded" title="Tables" headline="For every occasion">
          <p>Interactive, sortable table headings</p>
          <Table jsonData={tableJson} hover={true}/>
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
          </table>
        </PageModule>
        <PageModule style="bars" title="" headline="">
          <TextStyles />
        </PageModule>
        <PageModule style="red" title="Module Title" headline="Module Headline">
          <TextStyles />
        </PageModule>
        <PageModule style="blue" title="Module Title"
                    headline="Module Headline">
          <TextStyles />
        </PageModule>
        <PageModule style="dark" title="Module Title"
                    headline="Module Headline">
          <TextStyles />
        </PageModule>
      </div>
    );
  }
}


ComponentsTesting.propTypes = {};

export default ComponentsTesting;