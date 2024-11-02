import { DetailedHTMLProps, HTMLAttributes, JSX, ReactElement } from 'react';

export interface ButtonPanelIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  element?: ReactElement;
  text?: string;
}
