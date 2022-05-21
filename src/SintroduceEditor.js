import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './sintroduceEditor.scss';

import ThemePicker from './components/themePicker/themePicker';

export default class SintroduceEditor extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: null,
    }
  }

  renderThemeEditor(theme) {
    return (
      <></>
    );
  }

  selectTheme(theme) {
    this.setState({
      theme: theme,
    });
  }

  render() {
    var child;

    if(this.state.theme == null) {
      child = (
        <CSSTransition
          in={this.state.theme == null}
          key="themePicker"
          timeout={500}
          classNames="themePickerTransition">
          <ThemePicker onThemeSelected={(name) => this.selectTheme(name)} />
        </CSSTransition>
      );
    } else {
      child = (
        <CSSTransition
          in={this.state.theme != null}
          key="themeEditor"
          timeout={500}
          classNames="themeEditorTransition">
          {this.renderThemeEditor()}
        </CSSTransition>
      )
    }
    return (
      <SwitchTransition>
        {child}
      </SwitchTransition>
    );
  }
}
