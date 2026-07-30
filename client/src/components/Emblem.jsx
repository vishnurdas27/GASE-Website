// GASE emblem — inline SVG recreation of the client logo (navy G/E + gold + leaves).
// The .ring stroke is coloured via CSS so it can flip to white on dark backgrounds.
export default function Emblem() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path className="ring" d="M47 25 A19 19 0 1 0 47 43" fill="none" strokeWidth="7.5" strokeLinecap="round" />
      <rect x="31" y="29.5" width="18" height="5.6" rx="2.8" fill="#c9a227" />
      <rect x="31" y="38" width="12.5" height="5" rx="2.5" fill="#d9b84a" />
      <path d="M30 13 C22 11 15 14 12 20 C20 22 27 19 30 13 Z" fill="#4e9d34" />
      <path d="M33 11 C35 4 42 1 48 3 C47 10 41 14 33 11 Z" fill="#6bb843" />
    </svg>
  );
}
