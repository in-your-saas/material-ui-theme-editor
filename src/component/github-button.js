import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  image: {
    position: 'fixed',
    top: 0,
    right: 0,
    boder: 0,
    zIndex: 2000,
  },
});

const GithubButton = (props) => (
  <a
    href="https://github.com/in-your-saas/material-ui-theme-editor"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      className={props.classes.image}
      src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
      alt="Fork me on GitHub"
    />
  </a>
);

export default withStyles(styles)(GithubButton);
