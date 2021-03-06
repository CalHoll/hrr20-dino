import React from 'react';
// Workaround to use the already existing my-routine-nav. No need to create yet another nav.
import ChangeThemeNav from './change-theme-nav.react.js';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RoutineActions from '../../flux/actions/routine-actions';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router';
const routineController = require('../../../../server/api/routine/routine.controller.js');
import axios from 'axios';
import Theme from '../theme/theme.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class ChangeTheme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [
      {
        label: 'Winterfresh',
        description: "Brighten your day and freshen your smile with Prithvi's theme.",
        name: Theme.prithvi
      },
      {
        label: 'Apple Pie',
        description: "Brit loves apple pie. She loves it so much she made an apple pie theme.",
        name: Theme.brittany
      },
      {
        label: 'Raccoon Garbage',
        description: "Andrew's theme. Dedicated to all trash pandas in need of a midnight snack.",
        name: Theme.andrew
      },
      {
        label: 'Dark Base Theme',
        description: "Based on darker colors. For those with unique tastes.",
        name: darkBaseTheme
      },
      {
        label: 'Light Base Theme',
        description: "Blind me with thine light.",
        name: lightBaseTheme
      },
      {
       label: 'Blue Steel',
       description: "The trademark theme.",
       name: Theme.calvin
      },
      {
       label: 'Ferrari',
       description: "Flashing down the Autobahn at 180kph with your butt 4 inches off the pavement.",
       name: Theme.calvin
      },
      {
       label: 'Le Tigra',
       description: "A lot softer, more of a catalogue theme.",
       name: Theme.calvin
      },
      {
       label: 'Magnum',
       description: "Once saved the Malasian Prime Minister from a Ninja Star.",
       name: Theme.calvin
      },
      {
        label: 'FUNTIME EXTRAVAGANZA',
        description: "L337 H4XX0R PR0 M0D3",
        name: 'funtimeExtravaganza'
      },
      ]
    };
  }

  handleClick(theme) {
    console.log(theme);
    // window.globalTheme = theme;
    // console.log(window.globalTheme);

    if (theme === 'funtimeExtravaganza') {
      console.log('funtimes ACTIVATED');
      this.calsFunTimes();
    } else {
      this.props.route.changeTheme(theme);
    }

  }

  /// l337 h4xx0r pr0 7h3m3z //////////////////////////////////
  calsFunTimes() {
    setInterval(() => {
      [].forEach.call(document.querySelectorAll("*"),function(a){a.style.background="#"+(~~(Math.random()*(1<<24))).toString(16)})
    }, 1000);
  }
  /////////////////////////////////////////////////////////////

  render() {
    const paperStyle = {
      //height: 600,
      width: 600,
      margin: 20,
    };
    const centerPaper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div>
        <ChangeThemeNav />
        <div style={centerPaper}>
          <div>
            <Paper style={paperStyle} zDepth={4}>

              <Link to='/'>
                <ArrowBack />
              </Link>

              <div style={{margin: 20}}>


                <List>
                <Divider />
                  {/* display available themes for selection */}
                  {this.state.themes.map((theme, index) => {
                    return  (
                      <div>
                        <ListItem
                            primaryText={theme.label}
                            secondaryText={theme.description}
                            onClick={this.handleClick.bind(this, theme.name)}
                            key={index}
                        />
                        <Divider />
                      </div>
                    )
                  })}
                </List>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}
