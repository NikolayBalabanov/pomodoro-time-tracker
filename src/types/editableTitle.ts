export interface IEditableProps {
  title: string;
  edited: boolean;
  updateTitle: (e: string) => void;
  toggleEditable: () => void;
  onPickTask: () => void;
}
