import type { ClassName } from "./ClassName";

export interface DaisyTextareaProps extends ClassName {
	modelValue?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	rows?: number;
}
