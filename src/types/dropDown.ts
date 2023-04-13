import { EIcons } from '../components/UI/Icon';

export interface ITaskDropDownProps {
  id: string;
  count: number;
  onDelete: () => void;
  onClose: () => void;
  toggleEditable: () => void;
}

export interface ITaskDropDownItemProps {
  eventHandler: () => void;
  count: number;
  iconName: EIcons;
  text: string;
}

export interface ITaskDropDownListProps {
  id: string;
  count: number;
  onDelete: () => void;
  onClose: () => void;
  toggleEditable: () => void;
}
