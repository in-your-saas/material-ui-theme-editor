import saveAs from 'file-saver';
import get from 'lodash/get';
import set from 'lodash/set';

const whitelist = [
  'palette.common',
  'palette.background',
  'palette.primary',
  'palette.secondary',
  'palette.error',
  'palette.text',
];

const convert = (theme) => {
  return whitelist.reduce((res, key) => {
    const value = get(theme, key);
    return set(res, key, value);
  }, {});
};

const download = (theme) => {
  const clean = convert(theme);
  const fileToSave = new Blob([JSON.stringify(clean)], {
    type: 'application/json',
    name: 'theme.json',
  });
  saveAs(fileToSave, 'theme.json');
  return Promise.resolve();
};

export default {
  download,
};
