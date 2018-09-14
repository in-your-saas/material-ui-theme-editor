
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EditIcon from '@material-ui/icons/Edit';
import PageviewIcon from '@material-ui/icons/Pageview';

export default class NavigationBar extends React.PureComponent {
  handleChange = (e, value) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <BottomNavigation
        value={this.props.value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Edition" icon={<EditIcon />} />
        <BottomNavigationAction label="Preview" icon={<PageviewIcon />} />
      </BottomNavigation>
    );
  }
}
