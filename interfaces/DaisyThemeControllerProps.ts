import type { ClassName } from "./ClassName";

export interface DaisyThemeControllerProps extends ClassName {
	modelValue?: string | boolean;
	type?: "checkbox" | "radio";
	name?: string;
	value?: string;
	disabled?: boolean;
}
