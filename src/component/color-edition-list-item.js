import React from 'react';
import { SketchPicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';

import ColorBubble from './color-bubble';

const styles = () => ({
  avatar: {
    height: 25,
    width: 25,
  },
});

const anchorOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

class ColorEditionListItem extends React.Component {
  state = {
    anchor: null,
  };

  handleClick = (event) => {
    this.setState({ anchor: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchor: null });
  };

  handleChange = (color) => {
    const rgba = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    this.props.onChange(this.props.name, rgba);
  };

  render() {
    const {
      classes,
      rootClassName,
    } = this.props;
    return (
      <React.Fragment>
        <ListItem
          button
          className={rootClassName}
          onClick={this.handleClick}
        >
          <ColorBubble
            className={classes.avatar}
            color={this.props.value}
            size={10}
          />
          <ListItemText
            primary={this.props.label}
          />
        </ListItem>
        <Popover
          anchorEl={this.state.anchor}
          anchorOrigin={anchorOrigin}
          onClose={this.handleClose}
          open={Boolean(this.state.anchor)}
        >
          <SketchPicker
            color={this.props.value}
            onChangeComplete={this.handleChange}
          />
        </Popover>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ColorEditionListItem);
