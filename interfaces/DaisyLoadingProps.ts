import type { ClassName } from "./ClassName";

export interface DaisyLoadingProps extends ClassName {
	variant?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}
