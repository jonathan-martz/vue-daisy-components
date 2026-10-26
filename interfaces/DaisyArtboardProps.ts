import type { ClassName } from "./ClassName";
import type { ArtboardOrientation } from "../types/ArtboardOrientation";
import type { ArtboardSize } from "../types/ArtboardSize";

export interface DaisyArtboardProps extends ClassName {
	orientation?: ArtboardOrientation;
	size?: ArtboardSize;
	showNotch?: boolean;
}
