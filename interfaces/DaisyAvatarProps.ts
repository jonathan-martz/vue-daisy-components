import type { ClassName } from "./ClassName";

export interface DaisyAvatarProps extends ClassName {
	src?: string;
	alt?: string;
	initials?: string;
	status?: "online" | "offline";
	placeholder?: boolean;
}
