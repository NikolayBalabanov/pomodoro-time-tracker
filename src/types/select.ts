export interface ISelectItem {
  onChooseWeek: (target: number) => void;
  value: number;
  text: string;
}

export interface ISelectWeekProps {
  current: number;
  onChangeWeek: (e: number) => void;
}

export interface ISelectCurrentProps {
  isOpen: boolean;
  onSelect: () => void;
  text: string;
}
