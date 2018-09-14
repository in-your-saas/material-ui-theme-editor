import React from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import PreviewAppBar from './app-bar';
import PreviewBadge from './badge';
import PreviewBottomNavigation from './bottom-navigation';
import PreviewButton from './button';

const styles = () => ({
  root: {
    overflow: 'auto',
  },
});

class PreviewDisplay extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={this.props.theme}>
          <PreviewAppBar />
          <PreviewBadge />
          <PreviewBottomNavigation />
          <PreviewButton />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(PreviewDisplay);
