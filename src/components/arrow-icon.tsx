type ArrowIconProps = { direction: "right" | "up-right" };

export function ArrowIcon({ direction }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="inline-arrow-icon"
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      {direction === "right" ? (
        <path d="M4 12h16m-7-7 7 7-7 7" />
      ) : (
        <path d="M7 17 17 7M8 7h9v9" />
      )}
    </svg>
  );
}
