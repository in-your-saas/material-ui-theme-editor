import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit,
  },
  item: {
    marginBottom: theme.spacing.unit,
  },
});

class PreviewAppBar extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.item} position="relative" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Default App Bar
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar className={classes.item} position="relative" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Primary App Bar
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar className={classes.item} position="relative" color="secondary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Secondary App Bar
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(PreviewAppBar);
