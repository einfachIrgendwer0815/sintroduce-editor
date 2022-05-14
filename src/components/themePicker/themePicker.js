import React from 'react';
import './themePicker.scss';

import Themes from '../../data/themes';

export default class ThemePicker extends React.Component {
  generateListElements() {
    var elements = [];

    for(var i = 0; i < Themes.themes.length; i++) {
      elements.push(
        (
          <ThemeListElement
            name={Themes.themes[i].name}
            description={Themes.themes[i].description}
            src={Themes.themes[i].src}

            clickCallback={ Themes.themes[i].available ? this.props.onThemeSelected : () => {} }

            key={Themes.themes[i].id}
          />
        )
      );
    }

    return elements;
  }

  render() {
    return (
      <div id="themePicker">
        <div className="centered">
          <h1>Choose a theme!</h1>
          <ul>
            {this.generateListElements()}
          </ul>
        </div>
      </div>
    );
  }
}

function ThemeListElement(props) {
  return (
    <li
      className="themeListElement"
      onClick={ () => props.clickCallback(props.name) }
    >
      <img src={props.src} alt={props.name} />
      <div>
        <span className="name">{props.name}</span>
        <span className="description">{props.description}</span>
      </div>
    </li>
  )
}
