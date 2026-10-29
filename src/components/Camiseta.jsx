// Desenho da camiseta UNIFOR feito em SVG (imagem desenhada com código).
// A prop "comTexto" mostra o nome da universidade embaixo do "U".
export default function Camiseta({ comTexto = false, className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tecido" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d4290" />
          <stop offset="1" stopColor="#082a5e" />
        </linearGradient>
      </defs>
      <path
        d="M72 18 L48 27 L12 56 L34 88 L52 77 L52 188 L148 188 L148 77 L166 88 L188 56 L152 27 L128 18 Q100 38 72 18 Z"
        fill="url(#tecido)"
      />
      <path d="M72 18 Q100 38 128 18 Q122 34 100 35 Q78 34 72 18 Z" fill="#ffffff" opacity="0.92" />
      <rect x="86" y="70" width="28" height="28" rx="7" fill="#ffffff" />
      <text x="100" y="91" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0b4fb3"
        fontFamily="Manrope, sans-serif">U</text>
      {comTexto && (
        <text x="100" y="113" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#ffffff"
          letterSpacing="0.6" fontFamily="Manrope, sans-serif">
          <tspan x="100">UNIVERSIDADE</tspan>
          <tspan x="100" dy="9">DE FORTALEZA</tspan>
        </text>
      )}
    </svg>
  );
}
