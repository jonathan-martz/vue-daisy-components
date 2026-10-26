import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";

export interface DaisyModalProps extends ClassName {
	closeSize?: TextSize;
	open?: boolean;
}
