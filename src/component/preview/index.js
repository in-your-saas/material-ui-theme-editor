import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import PreviewAppBar from './app-bar';
import PreviewBadge from './badge';
import PreviewBottomNavigation from './bottom-navigation';
import PreviewButton from './button';

export default class PreviewDisplay extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.className}>
        <MuiThemeProvider theme={this.props.theme}>
          <PreviewAppBar />
          <PreviewBadge />
          <PreviewBottomNavigation />
          <PreviewButton />
        </MuiThemeProvider>
      </Paper>
    );
  }
}
