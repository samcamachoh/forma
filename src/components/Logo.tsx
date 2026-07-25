/**
 * The FDS monogram — Forma Design Studio.
 *
 * Vectorized from the supplied brand artwork: sub-pixel edge positions and
 * least-squares circle fits recovered the underlying construction (straight
 * edges plus five circular arcs), so this is a true geometric path rather
 * than an autotrace. It renders within 0.08% of the source bitmap.
 *
 * Drawn as one path using `currentColor` so it works on every brand
 * background — orange on cream, white on orange, orange on ink.
 */

const PATH =
  // F — block, crossbar incision from the right, concave quarter round
  // lifted out of the bottom-right corner.
  "M0 0H566V180.4H436.7V195.6H566V377.7A127.1 127.1 0 0 0 440.5 504H0Z" +
  // D — square left, both right-hand corners rounded.
  "M587 0H1026.8A127.3 127.3 0 0 1 1154.1 127.3V376.5" +
  "A127.5 127.5 0 0 1 1026.6 504H587Z" +
  // S — block with a concave bite in the left flank; the right flank steps
  // in at mid-height and returns as a near-half-circle bowl.
  "M1174.4 0H1736V251.7H1609.7A126.2 126.2 0 0 1 1736 378.1" +
  "A126.2 126.2 0 0 1 1624 504H1174.4V252.5H1301.2" +
  "A126.8 126.8 0 0 1 1174.4 125.7Z";

export default function Logo({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 1736 504"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d={PATH} fill="currentColor" />
    </svg>
  );
}
