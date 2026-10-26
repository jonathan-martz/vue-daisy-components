import type { ClassName } from "./ClassName";

export interface DaisyInputProps extends ClassName {
	modelValue?: string;
	type?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	readonly?: boolean;
	invalid?: boolean;
}
