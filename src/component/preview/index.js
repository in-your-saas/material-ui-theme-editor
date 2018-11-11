import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PreviewContainer from './container';

export default class PreviewDisplay extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <PreviewContainer className={this.props.className} />
      </MuiThemeProvider>
    );
  }
}
