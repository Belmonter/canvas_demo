import React from 'react';

export type IconBaseProps = {
  innerClassName?: string;
  name: string;
  onClick?: (
    e:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>
  ) => void;
  onFocus?: (e: React.FocusEvent<HTMLSpanElement>) => void;
} & Omit<React.SVGProps<SVGSVGElement>, 'onClick' | 'onFocus'>;

export type IconWrapperProps = {
  children: React.ReactElement;
} & IconBaseProps & { 'data-testid'?: string };

export type IconProps = Omit<IconBaseProps, 'name'>;
