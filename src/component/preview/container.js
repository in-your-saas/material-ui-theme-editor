import React from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import PreviewAppBar from './app-bar';
import PreviewBadge from './badge';
import PreviewBottomNavigation from './bottom-navigation';
import PreviewButton from './button';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
});

class PreviewContainer extends React.PureComponent {
  render() {
    const { classes, className } = this.props;
    return (
      <Paper className={cn(classes.root, className)}>
        <PreviewAppBar />
        <PreviewBadge />
        <PreviewBottomNavigation />
        <PreviewButton />
      </Paper>
    );
  }
}

export default withStyles(styles)(PreviewContainer);
