import React from 'react';

type IconProps = {
  color?: string;
  children: React.ReactElement;
};

const UniversalIcon: React.FC<IconProps> = ({ color = 'black', children }) => {
  // Клонируем дочерний элемент (SVG) и добавляем нужные стили
  const styledIcon = React.cloneElement(children, {
    style: { stroke: color, fill: color, ...children.props.style },
  });

  return styledIcon;
};

export default UniversalIcon;
