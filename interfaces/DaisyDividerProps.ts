import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";

export interface DaisyDividerProps extends ClassName {
	labelSize?: TextSize;
	orientation?: "horizontal" | "vertical";
	label?: string;
}
