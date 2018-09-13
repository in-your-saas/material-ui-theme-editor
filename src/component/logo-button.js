import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing.unit,
    paddingBottom: 0,
  },
  image: {
    maxWidth: 100,
  },
});

class LogoButton extends React.PureComponent {
  render() {
    return (
      <a
        className={this.props.classes.root}
        href="https://www.inyoursaas.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="In Your Saas Logo"
          className={this.props.classes.image}
          src="logo.png"
        />
      </a>
    );
  }
}

export default withStyles(styles)(LogoButton);
