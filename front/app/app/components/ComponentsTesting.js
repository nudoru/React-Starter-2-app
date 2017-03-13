import React from 'react';
import Lorem from '../../../../shared/utils/Lorem';

import PageModule from '../rh-components/rh-PageModule';
import Breadcrumbs from '../rh-components/rh-Breadcrumbs';
import CardGroup from '../rh-components/rh-CardGroup';
import CardIcon from '../rh-components/rh-CardIcon';
import Card from '../rh-components/rh-Card';
import Table from '../rh-components/rh-DataTable';
import {TabsHorizontal, Tab} from '../rh-components/rh-Tabs';
import Pagination from '../rh-components/rh-Pagination';
import Well from '../rh-components/rh-Well';
import IconCircle from '../rh-components/rh-IconCircle';
import IconCircleImage from '../rh-components/rh-IconCircleImage';
import IconCircleText from '../rh-components/rh-IconCircleText';
import {TagHGroup, Tag} from '../rh-components/rh-Tag';
import {StatusIcon, StatusIconTiny} from '../rh-components/rh-StatusIcon';
import {Spinner} from '../rh-components/rh-Spinner';
import {Status} from '../rh-components/rh-Status';
import {ToolTip} from '../rh-components/rh-ToolTip';
import Popupsimple from '../rh-components/rh-PopupSimple';
import ModalCover from '../rh-components/rh-ModalCover';
import ModalMessage from '../rh-components/rh-ModalMessage';
import {PleaseWaitModal} from '../components/PleaseWaitModal';
import LMSKerberosIDRequest from '../components/LMSKerberosIDRequest';
import {Panel} from '../rh-components/rh-Panel';

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
    this.state = {modal: false};
  }

  componentDidMount() {
  }

  _onButtonClick(e) {
    console.log('A button was clicked!', e);
  }

  _onModalClick(e) {
    console.log('Modal was clicked!', e);
    this.setState({modal: false});
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


    /*
     <ModalCover visible={this.state.modal} dismissible={true} dismissFunc={this._onModalClick.bind(this)}/>
     <ModalMessage
     message={{title: "Hello!", buttonLabel: 'Click me', buttonOnClick: this._onButtonClick.bind(this)}}>
     <p>MESSAGE IN A MODAL!!!</p>
     </ModalMessage>
     <PleaseWaitModal message="Reticulating splines"/>
     <LMSKerberosIDRequest/>

     */

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
          <TabsHorizontal>
            <Tab active={true} label="Tab One" />
            <Tab active={false} label="Tab Two" onClick={this._onButtonClick.bind(this)} />
            <Tab active={false} label="Tab Three" onClick={this._onButtonClick.bind(this)} />
            </TabsHorizontal>
          <hr/>
          <Well>
            <h1>Panel</h1>
            <Panel title='Ima control panel!' icon="cog" footerNote="Status!"
                   utilityButtons={[
                     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-wrench"/></button>,
                     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-comment"/></button>,
                     <button className="rh-button rh-button-text-neutral rh-button-icon"><i className="fa fa-close"/></button>
                   ]}
                   actionButtons={[<button className="rh-button rh-button-text">
                     Primary</button>,
                     <button className="rh-button rh-button-text-secondary">
                       Secondary</button>,
                     <button className="rh-button rh-button-text-neutral">
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
          </Well>
          <Well>
            <h1>Pop ups (Simple)</h1>
            <div className="grid-12-container">
              <div className="grid-row">
                <div className="grid-col-4">
                  <Popupsimple title="Hello!" icon="comment">
                    <p>{Lorem.paragraph(3, 7)}</p>
                  </Popupsimple>
                </div>
                <div className="grid-col-4">
                  <Popupsimple title="Hello!" buttonLabel='Click me'
                               buttonOnClick={this._onButtonClick.bind(this)}>
                    <p>{Lorem.paragraph(3, 7)}</p>
                  </Popupsimple>
                </div>
                <div className="grid-col-4">
                  <Popupsimple title="Oh no .." buttonLabel='Click me'
                               buttonOnClick={this._onButtonClick.bind(this)}
                               error={true}>
                    <p>{Lorem.paragraph(3, 7)}</p>
                  </Popupsimple>
                </div>
              </div>
            </div>

          </Well>
          <Well>
            <h1>Buttons</h1>
            <div className="rh-button-container-horiz">
              <button className="rh-button">Primary</button>
              <button className="rh-button rh-button-secondary">Secondary
              </button>
              <button className="rh-button rh-button-neutral">Neutral</button>
              <button className="rh-button rh-button-hollow">Hollow</button>
              <button className="rh-button rh-button-text">Text only</button>
              <button className="rh-button rh-button-text-secondary">Text only</button>
              <button className="rh-button rh-button-text-neutral">Text only</button>
              <button className="rh-button rh-button-icon"><i
                className="fa fa-user"/></button>
            </div>
            <div className="rh-button-container-horiz">
              <button className="rh-button rh-button-small">Primary</button>
              <button className="rh-button rh-button-secondary rh-button-small">
                Secondary
              </button>
              <button className="rh-button rh-button-neutral rh-button-small">
                Neutral
              </button>
              <button className="rh-button rh-button-hollow rh-button-small">
                Hollow
              </button>
              <button className="rh-button rh-button-text rh-button-small">Text
                only
              </button>
              <button className="rh-button rh-button-icon rh-button-small"><i
                className="fa fa-user"/></button>
            </div>
            <div className="rh-button-group-horiz">
              <button className="rh-button">Grouped horizontal</button>
              <button className="rh-button rh-button-secondary">Secondary
              </button>
              <button className="rh-button rh-button-secondary">Neutral</button>
            </div>
            <div className="rh-button-group-vert">
              <button className="rh-button">Grouped vertical</button>
              <button className="rh-button rh-button-secondary">Secondary
              </button>
              <button className="rh-button rh-button-secondary">Neutral</button>
            </div>
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
            <h1>Spinner</h1>
            <Spinner type="spinner-xlg"/>
            <Spinner type="spinner-lg"/>
            <Spinner />
            <Spinner type="spinner-sm"/>
            <Spinner type="spinner-xs"/>
            <Spinner type="spinner-inverse"/>
          </Well>
          <Well>
            <h1>Tags</h1>
            <TagHGroup>
              <Tag><i className="fa fa-hashtag"/>Foo</Tag>
              <Tag><i className="fa fa-tag"/>Bar</Tag>
              <Tag><i className="fa fa-tags"/>This bar <em>that quaz</em> like a
                foo</Tag>
              <Tag>Qiz</Tag>
              <Tag>{Lorem.text(2, 7)}</Tag>
              <Tag>{Lorem.text(2, 7)}</Tag>
            </TagHGroup>
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
            <Status type="pass">Lorem Ipsum is simply dummy text of the printing
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
            <Status type="fail">Something blew up!</Status>
          </Well>
          <hr/>
          <h1>Card groups</h1>
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

        </PageModule>
        <PageModule style="bars" headline="Forms">
          <Well>
            <Well>
              <form className="rh-form-stacked">
                <legend>Stacked Form</legend>
                <fieldset>
                  <div className="rh-form-group">
                    <label htmlFor="input1">What's your name?</label>
                    <input type="text" placeholder="Type here" id="input1"/>
                    <span className="rh-form-help">Real names only</span>
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
                  <div className="rh-form-group">
                    <label htmlFor="input1">What's your name?</label>
                    <div className="rh-form-input-group-stacked">
                      <input type="text" placeholder="First" id="input1"/>
                      <input type="text" placeholder="Middle" id="input1"/>
                      <input type="text" placeholder="Last" id="input1"/>
                      <textarea rows="3">Text area!</textarea>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label htmlFor="input1">Disabled</label>
                    <input disabled="true" type="text" placeholder="Type here"
                           id="input1"/>
                    <label htmlFor="input1">Error</label>
                    <input className="isError" type="text"
                           placeholder="Type here" id="input1"/>
                  </div>
                  <div className="rh-form-group">
                    <input type="text" className="input-1"
                           placeholder="Width 1"/>
                    <input type="text" className="input-3-4"
                           placeholder="Width 3/4"/>
                    <input type="text" className="input-2-3"
                           placeholder="Width 2/3"/>
                    <input type="text" className="input-1-2"
                           placeholder="Width 1/2"/>
                    <input type="text" className="input-1-3"
                           placeholder="Width 1/3"/>
                    <input type="text" className="input-1-4"
                           placeholder="Width 1/4"/>
                  </div>
                </fieldset>
              </form>
            </Well>
            <Well>
              <form className="rh-form-inline">
                <legend>Inline, aligned Form</legend>
                <fieldset>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="input1">What's your
                      name?</label>
                    <div className="grid-col-10">
                      <input type="text" placeholder="Type here" id="input1"/>
                      <span
                        className="rh-form-help-inline">Real names only</span>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="textarea1">What's
                      your name?</label>
                    <div className="grid-col-10">
                      <textarea id="textarea1">Type here</textarea>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="select1">How
                      much?</label>
                    <div className="grid-col-10">
                      <select id="select1">
                        <option>None</option>
                        <option>Some</option>
                        <option>All</option>
                      </select>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2">What's the best
                      option?</label>
                    <div className="grid-col-10">
                      <label><input type="checkbox" id="cbox1"
                                    value="first_checkbox"/> Option 1</label>
                      <label><input type="checkbox" id="cbox2"
                                    value="first_checkbox"/> Option 2</label>
                      <label><input type="checkbox" id="cbox3"
                                    value="first_checkbox"/> Option 3</label>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2">What's the best
                      option?</label>
                    <div className="grid-col-10">
                      <label><input type="radio" name="options"
                                    value="first_checkbox"/> Option 1</label>
                      <label><input type="radio" name="options"
                                    value="first_checkbox"/> Option 2</label>
                      <label><input type="radio" name="options"
                                    value="first_checkbox"/> Option 3</label>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="input1">What's your
                      name?</label>
                    <div className="grid-col-10">
                      <div className="rh-form-input-group-inline">
                        <input type="text" placeholder="First" id="input1"/>
                        <input type="text" placeholder="Middle" id="input1"/>
                        <input type="text" placeholder="Last" id="input1"/>
                      </div>
                    </div>
                  </div>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="input1">What's your
                      email?</label>
                    <div className="grid-col-10">
                      <div className="rh-form-input-group-inline">
                        <div className="group-addon"><i className="fa fa-user"/>
                        </div>
                        <input type="text" placeholder="userid" id="input1"/>
                        <div className="group-addon">@</div>
                        <input type="text" placeholder="" id="input1"
                               value="redhat.com"/>
                        <button className="rh-button">Submit</button>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <hr />
                <fieldset>
                  <div className="rh-form-group">
                    <label className="grid-col-2" htmlFor="input1">What's
                      yourname?</label>
                    <div className="grid-col-2">
                      <input type="text" placeholder="Type here" id="input1"/>
                    </div>
                    <label className="grid-col-2" htmlFor="input1">What's your
                      name?</label>
                    <div className="grid-col-2">
                      <input type="text" placeholder="Type here" id="input1"/>
                    </div>
                    <label className="grid-col-2" htmlFor="input1">What's your
                      name?</label>
                    <div className="grid-col-2">
                      <input type="text" placeholder="Type here" id="input1"/>
                    </div>
                  </div>
                </fieldset>
              </form>
            </Well>
          </Well>
        </PageModule>
        <PageModule style="shaded" title="Tables" headline="">
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