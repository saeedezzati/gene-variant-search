// Components
import React, { Component } from 'react';
import Main from '../containers/Main';
import PropTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import teal from 'material-ui/colors/teal';
import orange from 'material-ui/colors/orange';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
	palette: {
		primary: teal, 
		secondary: orange,
		error: red,
	},
});

class App extends Component {

	render(){
		return(
			<MuiThemeProvider theme={theme}>
				<div>
					<Reboot />
					<Main />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App;