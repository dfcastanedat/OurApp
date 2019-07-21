import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { ApplicationProvider } from 'react-native-ui-kitten';


export default class Routes extends Component<{}> {

	render() {
		return(
				<Router>
					<Stack key="root" hideNavBar={true}>
					</Stack>
				 </Router>
			)
	}
}
