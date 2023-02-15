import { ButtonProps } from "@/types";

export default function Button({
  children,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  return <button type="button" disabled={disabled} onClick={onClick} className={`disabled:bg-gray-500 disabled:cursor-not-allowed w-full rounded-md p-3 text-white transition hover:bg-opacity-90 ${className}`}>{children}</button>;
}
