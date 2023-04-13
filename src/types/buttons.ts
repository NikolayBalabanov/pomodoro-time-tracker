import { EStages } from '../models/timer';

export interface IButtonUnderscoredProps {
  text: string;
  callback: () => void;
}

export interface IButtonToggler {
  isStarted: boolean;
  isRunning: boolean;
}
export interface IButtonStopProps {
  text: string;
  stage: EStages;
  isStarted: boolean;
  isRunning: boolean;
}
export interface IButtonSound {
  onToggleSound: () => void;
  isMute: boolean;
}
export interface IButtonConfirmProps {
  text: string;
  callback: () => void;
}
export interface IButtonColoredProps {
  text: string;
  color: 'green' | 'red';
  type: 'button' | 'submit';
  callback: () => void;
}
export interface IButtonCloseProps {
  callback: () => void;
}
