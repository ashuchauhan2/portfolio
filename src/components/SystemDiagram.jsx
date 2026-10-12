export default function SystemDiagram() {
  return (
    <figure className="system-diagram">
      <div className="diagram-heading">
        <span>THE SYSTEMS PERSPECTIVE</span>
        <span>FIG. 01</span>
      </div>
      <svg viewBox="0 0 500 370" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id="system-grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path d="M25 0H0V25" stroke="#d6ded6" strokeWidth=".6" />
          </pattern>
          <marker
            id="system-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="m1 1 6 3-6 3"
              stroke="#46745c"
              strokeWidth="1.3"
              fill="none"
            />
          </marker>
        </defs>
        <rect width="500" height="370" fill="url(#system-grid)" />
        <circle
          cx="250"
          cy="176"
          r="131"
          stroke="#c1cec0"
          strokeDasharray="3 6"
        />
        <circle cx="250" cy="176" r="96" stroke="#c1cec0" />
        <path
          d="M250 35V52M250 300V317M92 176H109M391 176H408"
          stroke="#a5b6a5"
        />
        <path
          d="M135 115C154 60 213 40 253 47C310 51 350 83 365 130"
          stroke="#46745c"
          strokeWidth="1.4"
          markerEnd="url(#system-arrow)"
        />
        <path
          d="M375 210C346 283 277 304 227 298C184 293 154 271 136 233"
          stroke="#46745c"
          strokeWidth="1.4"
          markerEnd="url(#system-arrow)"
        />
        <path
          d="M154 176H205M295 176H343"
          stroke="#46745c"
          strokeWidth="1.5"
          markerEnd="url(#system-arrow)"
        />
        <path
          d="M250 221V255H118V207"
          stroke="#8ba28b"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          markerEnd="url(#system-arrow)"
        />
        <rect
          x="55"
          y="144"
          width="100"
          height="65"
          rx="3"
          fill="#f4f6ef"
          stroke="#a6bba6"
        />
        <path
          d="M73 165H87M80 158V172M76 161L84 169M84 161L76 169"
          stroke="#46745c"
        />
        <text
          x="72"
          y="191"
          fill="#385a45"
          fontSize="12"
          fontFamily="monospace"
        >
          PERCEIVE
        </text>
        <rect x="205" y="132" width="90" height="89" rx="3" fill="#244e39" />
        <path
          d="M231 157H241V167H231ZM259 157H269V167H259ZM241 162H259M250 162V181M237 181H263"
          stroke="#adcaac"
          strokeWidth="1.4"
        />
        <text
          x="219"
          y="203"
          fill="#f1f4eb"
          fontSize="12"
          fontFamily="monospace"
        >
          REASON
        </text>
        <rect
          x="345"
          y="144"
          width="100"
          height="65"
          rx="3"
          fill="#f4f6ef"
          stroke="#a6bba6"
        />
        <path
          d="M364 162H379M374 157L379 162L374 167"
          stroke="#46745c"
          strokeWidth="1.4"
        />
        <text
          x="363"
          y="191"
          fill="#385a45"
          fontSize="12"
          fontFamily="monospace"
        >
          ACT
        </text>
        <circle cx="156" cy="83" r="4" fill="#73916c" />
        <circle cx="321" cy="283" r="4" fill="#73916c" />
        <text
          x="200"
          y="275"
          fill="#68816b"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="1.3"
        >
          FEEDBACK
        </text>
        <text x="27" y="343" fill="#68816b" fontSize="9" fontFamily="monospace">
          x: software
        </text>
        <text
          x="373"
          y="343"
          fill="#68816b"
          fontSize="9"
          fontFamily="monospace"
        >
          y: real world
        </text>
      </svg>
      <figcaption>
        <span className="diagram-caption-title">Sense. Decide. Act.</span>
        <span className="mono">CONCEPTUAL CONTROL LOOP</span>
      </figcaption>
    </figure>
  );
}
