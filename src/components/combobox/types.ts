export type Option = string;

export interface ComboboxMultiProps {
  /** Unique ID for combobox container (optional) */
  id?: string;

  /** Label displayed above the combobox */
  label: string;

  /** List of options to display */
  options: Option[];

  /** Placeholder text shown in the input */
  placeholder?: string;

  /** Enables creation of new options */
  allowCreate?: boolean;
}
