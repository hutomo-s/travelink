/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import AutoComplete from 'material-ui/AutoComplete';

import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center'
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class MainButton extends Component {
  constructor(props, context) {
    super(props, context);

	  //this.onNewRequest = this.onNewRequest.bind(this);

    this.handleUpdateInput = this.handleUpdateInput.bind(this);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      open: false,
      areas: [
        "Cihampelas",
        "Slipi",
        "Tanjung Pandan",
      ],
      searchText: ""
    };
  }

  handleUpdateInput (t) { 
    this.setState({ searchText: t }); 
  }

  handleSelect (t) {
    //this.setState( { searchText: '' });
    alert(this.state.searchText); 
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
		  <AutoComplete
          floatingLabelText="Street or District Name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.areas}
          maxSearchResults={5}
          searchText={this.state.searchText}
          onNewRequest={this.handleSelect}
          onUpdateInput={this.handleUpdateInput}
			/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainButton;