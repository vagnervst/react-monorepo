import React from 'react';

import './title.module.css';

export interface TitleProps {
  text: string,
}

export function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  );
}

export default Title;
