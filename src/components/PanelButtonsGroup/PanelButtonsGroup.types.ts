import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PanelButtonsGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  separateLine?: 'left' | 'right' | 'none';
  addPadding: 'right' | 'left' | 'all';
}
