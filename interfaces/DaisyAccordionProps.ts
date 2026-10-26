import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";
import type { DaisyAccordionItem } from "./DaisyAccordionItem";

export interface DaisyAccordionProps extends ClassName {
	titleSize?: TextSize;
	descriptionSize?: TextSize;
	items?: DaisyAccordionItem[];
	name?: string;
}
