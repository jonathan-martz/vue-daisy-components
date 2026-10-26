import type { ClassName } from "./ClassName";

export interface DaisySelectProps extends ClassName {
	modelValue?: string;
	name?: string;
	disabled?: boolean;
	required?: boolean;
}
