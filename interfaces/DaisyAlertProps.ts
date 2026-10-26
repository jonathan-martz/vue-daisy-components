import type { TextSize } from "../types/TextSize";
import type { AlertVariant } from "../types/AlertVariant";
import type { ClassName } from "./ClassName";

export interface DaisyAlertProps extends ClassName {
	titleSize?: TextSize;
	messageSize?: TextSize;
	closeSize?: TextSize;
	variant?: AlertVariant;
	title?: string;
	message?: string;
	dismissible?: boolean;
}
