/**
 * The FDS monogram — Forma Design Studio.
 *
 * Drawn as a single path so it inherits `currentColor` and works on any of the
 * three brand backgrounds (orange on cream, white on orange, orange on white).
 * Geometry lives on an 820 x 240 grid: three equal-weight blocks, tight
 * kerning, one hairline incision per letter, and quarter-round terminals.
 */

const PATH = [
  // F — solid block, crossbar cut in from the right, concave quarter round
  // lifted out of the bottom-right corner.
  "M0 0 H263 V84 H186 V95 H263 V150 A90 90 0 0 0 173 240 H0 Z",
  // D — square left, stadium right.
  "M273 0 H426 A110 110 0 0 1 536 110 V130 A110 110 0 0 1 426 240 H273 Z",
  // S — full-width top bar, incision from the right, counter-incision from the
  // left, rounded bottom-right bowl.
  "M546 0 H820 V101 H660 V112 H820 V130 A110 110 0 0 1 710 240 H546 V156 H734 V145 H546 Z",
].join(" ");

export default function Logo({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 820 240"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}
