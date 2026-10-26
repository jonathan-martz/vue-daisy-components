import type { ClassName } from "./ClassName";

export interface DaisyMaskProps extends ClassName {
	shape?:
		| "squircle"
		| "heart"
		| "hexagon"
		| "hexagon-2"
		| "decagon"
		| "pentagon"
		| "diamond"
		| "square"
		| "circle"
		| "star"
		| "star-2"
		| "triangle"
		| "triangle-2"
		| "triangle-3"
		| "triangle-4"
		| "parallelogram"
		| "parallelogram-2"
		| "parallelogram-3"
		| "parallelogram-4";
	size?: "sm" | "md" | "lg";
}
