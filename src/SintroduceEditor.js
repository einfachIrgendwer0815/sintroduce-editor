import React from 'react';

import ThemePicker from './components/themePicker/themePicker';

export default class SintroduceEditor extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: null,
    }
  }

  renderThemeEditor(theme) {

  }

  selectTheme(theme) {
    this.setState({
      theme: theme,
    });
  }

  render() {
    if(this.state.theme === null) {
      return (
        <ThemePicker onThemeSelected={(name) => this.selectTheme(name)} />
      );
    }
  }
}
