import * as React from 'react';

export const navigationRef = React.createRef();

export function navigateTo(name, params) {
  console.log('Navigating');
  navigationRef.current?.navigate(name, params);
}