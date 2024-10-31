import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface ButtonPanelIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
  typeOfView: 'icon' | 'iconText' | 'elementText';
  imgClassName?: string;
  element?: ReactElement;
  text?: string;
}
