import type { ClassName } from "./ClassName";
import type { DaisyAccordionItem } from "./DaisyAccordionItem";

export interface DaisyAccordionProps extends ClassName {
	items?: DaisyAccordionItem[];
	name?: string;
}
