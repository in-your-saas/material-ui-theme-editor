import React from 'react';
import cn from 'classnames';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SectionEdition from '../component/section-edition';
import SectionPreview from '../component/section-preview';
import DownloadButton from '../component/download-button';
import GithubButton from '../component/github-button';
import NavigationBar from '../component/navigation-bar';
import PreviewDisplay from '../component/preview';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flex: 1,
  },
  desktopRoot: {
    flexDirection: 'row',
  },
  mobileRoot: {
    flexDirection: 'column',
  },
  desktopEdition: {
    minWidth: 250,
    maxWidth: 350,
    flex: 2,
  },
  mobileEdition: {
    width: '100%',
  },
  desktopPreview: {
    flex: 3,
  },
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Editor extends React.Component {
  state = {
    theme: createMuiTheme(),
    view: 'desktop',
    tab: 0,
  };

  handleChangeTheme = (theme) =>
    this.setState({ theme });

  handleChangeView = (view) =>
    this.setState({ view });

  handleChangeTab = (tab) =>
    this.setState({ tab });

  renderTab() {
    const { classes } = this.props;
    if (this.state.tab === 1) {
      return (
        <PreviewDisplay theme={this.state.theme} />
      );
    }
    return (
      <SectionEdition
        rootClassName={classes.mobileEdition}
        onChange={this.handleChangeTheme}
        theme={this.state.theme}
      />
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Hidden smDown>
          <main className={cn(classes.root, classes.desktopRoot)}>
            <GithubButton />
            <SectionEdition
              rootClassName={classes.desktopEdition}
              onChange={this.handleChangeTheme}
              theme={this.state.theme}
            />
            <SectionPreview
              rootClassName={classes.desktopPreview}
              onChange={this.handleChangeView}
              theme={this.state.theme}
              view={this.state.view}
            />
            <DownloadButton
              rootClassName={classes.button}
              theme={this.state.theme}
            />
          </main>
        </Hidden>
        <Hidden mdUp>
          <main className={cn(classes.root, classes.mobileRoot)}>
            {this.renderTab()}
            <NavigationBar
              onChange={this.handleChangeTab}
              value={this.state.tab}
            />
          </main>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Editor);
