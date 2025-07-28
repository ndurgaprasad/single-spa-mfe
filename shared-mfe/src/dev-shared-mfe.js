// Anything exported from this file is importable by other in-browser modules.
import SharedMfe from './root.component';
import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

// Create a shared button component
export function SharedButton(props) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {props.children}
    </Button>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SharedMfe,
});

export const { bootstrap, mount, unmount } = lifecycles;

export function publicApiFunction() {}

export { SharedMfe };
