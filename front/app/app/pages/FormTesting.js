import React from 'react';
import { connect } from 'react-redux';
import PageModule from '../rh-components/rh-PageModule';
import { Grid, Row, Col } from '../rh-components/rh-Grid';
import {
  Button,
  SecondaryButton,
  NeutralButton,
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
import Status from '../rh-components/rh-Status';
import ToolTip from '../rh-components/rh-ToolTip';
import Well from '../rh-components/rh-Well';

class TemplatePage extends React.Component {

  constructor () {
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
  componentDidMount () {
    console.log('Template page, ', this.props);
  }

  onFormChange(e) {
    console.log('Change',e);
  }

  onFormBlur(e) {
    console.log('Blur',e);
  }
  onFormFocus(e) {
    console.log('Focus',e);
  }

  render () {
    return (
      <div>
        <PageModule>
          <Well>
            <VForm>
              <legend>Vertical Form</legend>
              <fieldset>
                <FormGroup>
                  <TextInput
                    label="What's YOUR name?"
                    help="Real names only please"
                    placeholder="Type here"
                    datalist="Foo,Bar,Foobar"
                    onBlur={this.onFormBlur.bind(this)}
                    onFocus={this.onFormFocus.bind(this)}
                    onChange={this.onFormChange.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <TextArea label="Some long input ..." help="Consult wikipedia">
                    Lots-o-text</TextArea>
                </FormGroup>
                <FormGroup>
                  <DropDown label="Pick one" help="Choooose ...">
                    <Option value="1">None</Option>
                    <Option value="2">Some</Option>
                    <Option value="3">All</Option>
                  </DropDown>
                </FormGroup>
                <FormGroup>
                  <ListBox label="Pick many" help="Choooose ...">
                    <Option value="1">None</Option>
                    <Option value="2">Some</Option>
                    <Option value="3">All</Option>
                  </ListBox>
                </FormGroup>
                <FormGroup>
                  <CheckGroup label="Pick many" help="Choooose ...">
                    <Checkbox value="1">Choice 1</Checkbox>
                    <Checkbox value="2">Choice 2</Checkbox>
                    <Checkbox value="3">Choice 3</Checkbox>
                  </CheckGroup>
                </FormGroup>
                <FormGroup>
                  <RadioGroup label="Pick one" help="Choooose ...">
                    <Radio value="1">Choice 1</Radio>
                    <Radio value="2">Choice 2</Radio>
                    <Radio value="3">Choice 3</Radio>
                  </RadioGroup>
                </FormGroup>
                <FormGroup>
                  <TextInput label="I'm disabled" disabled="true" value="Can't edit this"/>
                  <TextInput label="I'm ERRORED" className="isError" value="You did it wrong!"/>
                </FormGroup>
                <FormGroup>
                  <TextInput className="input-1" placeholder="Width 1"/>
                  <TextInput className="input-3-4" placeholder="Width 3/4"/>
                  <TextInput className="input-2-3" placeholder="Width 2/3"/>
                  <TextInput className="input-1-2" placeholder="Width 1/2"/>
                  <TextInput className="input-1-3" placeholder="Width 1/3"/>
                  <TextInput className="input-1-4" placeholder="Width 1/4"/>
                </FormGroup>
              </fieldset>
            </VForm>
          </Well>

          <Well>
            <HForm>
              <legend>Horizontal Form</legend>
              <fieldset>
                <FormGroup>
                  <TextInput
                    label="What's YOUR name?"
                    help="Real names only please"
                    placeholder="Type here"
                    datalist="Foo,Bar,Foobar"
                    onBlur={this.onFormBlur.bind(this)}
                    onFocus={this.onFormFocus.bind(this)}
                    onChange={this.onFormChange.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <TextArea label="Some long input ..." help="Consult wikipedia">
                    Lots-o-text</TextArea>
                </FormGroup>
                <FormGroup>
                  <DropDown label="Pick one" help="Choooose ...">
                    <Option value="1">None</Option>
                    <Option value="2">Some</Option>
                    <Option value="3">All</Option>
                  </DropDown>
                </FormGroup>
                <FormGroup>
                  <ListBox label="Pick many" help="Choooose ...">
                    <Option value="1">None</Option>
                    <Option value="2">Some</Option>
                    <Option value="3">All</Option>
                  </ListBox>
                </FormGroup>
                <FormGroup>
                  <CheckGroup label="Pick many" help="Choooose ...">
                    <Checkbox value="1">Choice 1</Checkbox>
                    <Checkbox value="2">Choice 2</Checkbox>
                    <Checkbox value="3">Choice 3</Checkbox>
                  </CheckGroup>
                </FormGroup>
                <FormGroup>
                  <RadioGroup label="Pick one" help="Choooose ...">
                    <Radio value="1">Choice 1</Radio>
                    <Radio value="2">Choice 2</Radio>
                    <Radio value="3">Choice 3</Radio>
                  </RadioGroup>
                </FormGroup>
                <FormGroup>
                  <TextInput label="I'm disabled" disabled="true" value="Can't edit this"/>
                  <TextInput label="I'm ERRORED" className="isError" value="You did it wrong!"/>
                </FormGroup>
              </fieldset>
            </HForm>
          </Well>


          <Well>
            <VForm>
              <fieldset>
            <legend>Vetical Groups</legend>
              <FormGroup>
                <label htmlFor="input1">What's your name?</label>
                <FormVGroup>
                  <input type="text" placeholder="First" id="input1"/>
                  <input type="text" placeholder="Middle" id="input1"/>
                  <input type="text" placeholder="Last" id="input1"/>
                  <textarea rows="3">Text area!</textarea>
                </FormVGroup>
              </FormGroup>
              </fieldset>
            </VForm>
            <HForm>
              <fieldset>
                <legend>Horizontal Groups</legend>
                <FormHGroupRow label="What's your name?">
                  <FormHGroup>
                    <input type="text" placeholder="First" id="input1"/>
                    <input type="text" placeholder="Middle" id="input1"/>
                    <input type="text" placeholder="Last" id="input1"/>
                  </FormHGroup>
                </FormHGroupRow>
                <FormHGroupRow label="What's your email?">
                  <FormHGroup>
                    <HInputDecorator icon="user"/>
                    <input type="text" placeholder="userid" id="input1"/>
                    <HInputDecorator>@</HInputDecorator>
                    <input type="text" placeholder="" id="input1"
                           value="redhat.com"/>
                    <Button>Submit</Button>
                  </FormHGroup>
                </FormHGroupRow>
              </fieldset>
            </HForm>
          </Well>

        </PageModule>
      </div>);
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