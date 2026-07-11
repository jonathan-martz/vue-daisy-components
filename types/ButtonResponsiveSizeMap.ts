import type { Breakpoint } from "./Breakpoint";
import type { ButtonBaseSize } from "./ButtonBaseSize";

export type ButtonResponsiveSizeMap = Partial<
	Record<Breakpoint, ButtonBaseSize>
>;
