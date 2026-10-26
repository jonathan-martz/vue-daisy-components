import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";

export interface DaisyCollapseProps extends ClassName {
	titleSize?: TextSize;
	descriptionSize?: TextSize;
}
