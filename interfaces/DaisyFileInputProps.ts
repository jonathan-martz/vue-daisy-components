import type { ClassName } from "./ClassName";

export interface DaisyFileInputProps extends ClassName {
	name?: string;
	accept?: string;
	disabled?: boolean;
	multiple?: boolean;
	required?: boolean;
}
