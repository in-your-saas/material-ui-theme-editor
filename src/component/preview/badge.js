import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const styles = (theme) => ({
  root: {
    padding: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class PreviewBadge extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={42} color="error">
          <MailIcon />
        </Badge>
      </div>
    );
  }
}

export default withStyles(styles)(PreviewBadge);
