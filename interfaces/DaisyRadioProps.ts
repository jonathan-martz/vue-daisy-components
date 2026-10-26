import type { ClassName } from "./ClassName";

export interface DaisyRadioProps extends ClassName {
	modelValue?: string | number;
	value: string | number;
	name: string;
	disabled?: boolean;
}
