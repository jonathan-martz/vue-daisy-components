import type { ClassName } from "./ClassName";

export interface DaisyLabelProps extends ClassName {
	modelValue: string | number;
	label: string;
	variant?: "default" | "floating";
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	error?: boolean;
}
