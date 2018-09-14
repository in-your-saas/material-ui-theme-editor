# Material UI theme editor

Click [here](https://in-your-saas.github.io/material-ui-theme-editor/) to access it

## What is it made for?

I'm a developer that loves to work with [MaterialUI](https://material-ui.com/) but it generates always the same looking websites.
That's when a designer arrives and tell you "You've to use this color, and this color...", and it's a pain to integrate, you cannot make
it fit with your MaterialUI theme, etc, just because your designer isn't really aware of what you use and what are the limits.

So now, give this website to your designer, and wait for him to give you the theme file. And then, to integrate it, you just have to do
the following

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Application from './your/entry/point';
import yourRawTheme from './wherever/is/your/theme.json';

const theme = createMuiTheme(yourRawTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Application />
  </MuiThemeProvider>
, document.getElementById('root'));
```

And BOOOM! You have a nice theme, you designer is happy, and you didn't fight with him/her...
