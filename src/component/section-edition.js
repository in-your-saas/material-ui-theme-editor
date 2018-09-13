import React from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import LogoButton from './logo-button';
import PaletteEditionCard from './palette-edition-card';

const styles = (theme) => ({
  root: {
    overflowY: 'auto',
  },
  card: {
    margin: theme.spacing.unit,
  },
  logo: {
    maxWidth: 150,
  },
});

const paletteFields = {
  common: [
    {label: 'Black', name: 'black'},
    {label: 'White', name: 'white'},
  ],
  background: [
    {label: 'Paper', name: 'paper'},
    {label: 'Default', name: 'default'},
  ],
  primary: [
    {label: 'Main', name: 'main'},
    {label: 'Light', name: 'light'},
    {label: 'Dark', name: 'dark'},
    {label: 'Contrast text', name: 'contrastText'},
  ],
  secondary: [
    {label: 'Main', name: 'main'},
    {label: 'Light', name: 'light'},
    {label: 'Dark', name: 'dark'},
    {label: 'Contrast text', name: 'contrastText'},
  ],
  error: [
    {label: 'Main', name: 'main'},
    {label: 'Light', name: 'light'},
    {label: 'Dark', name: 'dark'},
    {label: 'Contrast text', name: 'contrastText'},
  ],
  text: [
    {label: 'Primary', name: 'primary'},
    {label: 'Secondary', name: 'secondary'},
    {label: 'Disabled', name: 'disabled'},
    {label: 'Hint', name: 'hint'},
  ],
};

class SectionEdition extends React.PureComponent {
  handleChangePalette = (name, changes) => {
    this.props.onChange({
      ...this.props.theme,
      palette: {
        ...this.props.theme.palette,
        [name]: changes,
      },
    });
  };

  render() {
    const { classes, rootClassName } = this.props;
    return (
      <aside className={cn(classes.root, rootClassName)}>
        <LogoButton />
        <PaletteEditionCard
          label="Common colors"
          name="common"
          fields={paletteFields.common}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.common}
          rootClassName={classes.card}
        />
        <PaletteEditionCard
          label="Background colors"
          name="background"
          fields={paletteFields.background}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.background}
          rootClassName={classes.card}
        />
        <PaletteEditionCard
          label="Primary colors"
          name="primary"
          fields={paletteFields.primary}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.primary}
          rootClassName={classes.card}
        />
        <PaletteEditionCard
          label="Secondary colors"
          name="secondary"
          fields={paletteFields.secondary}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.secondary}
          rootClassName={classes.card}
        />
        <PaletteEditionCard
          label="Error colors"
          name="error"
          fields={paletteFields.error}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.error}
          rootClassName={classes.card}
        />
        <PaletteEditionCard
          label="Text colors"
          name="text"
          fields={paletteFields.text}
          onChange={this.handleChangePalette}
          palette={this.props.theme.palette.text}
          rootClassName={classes.card}
        />
      </aside>
    );
  }
}

export default withStyles(styles)(SectionEdition);
