import type { ClassName } from "./ClassName";

export interface DaisyCheckboxProps extends ClassName {
	modelValue?: boolean;
	name?: string;
	value?: string | number;
	disabled?: boolean;
}
