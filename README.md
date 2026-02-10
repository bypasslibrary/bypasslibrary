<div align="center">

<svg width="680" height="160" viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <!-- animated gradient -->
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6FE8FF">
        <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#7FE3D7"/>
      <stop offset="100%" stop-color="#8FF0C8">
        <animate attributeName="offset" values="1;0" dur="3s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>

    <!-- glow -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- glitch -->
    <filter id="glitch">
      <feColorMatrix type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0">
        <animate attributeName="values"
          dur="4s"
          repeatCount="indefinite"
          values="
          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0;
          1 0 0 0 0.02  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0;
          1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
      </feColorMatrix>
    </filter>
  </defs>

  <!-- background -->
  <rect width="100%" height="100%" fill="#0D1117"/>

  <!-- title -->
  <text x="50%" y="60%"
        text-anchor="middle"
        font-family="JetBrains Mono, monospace"
        font-size="36"
        fill="url(#grad)"
        filter="url(#glow) url(#glitch)">
    BYPASSLIBRALI
    <animate attributeName="opacity"
             values="0.85;1;0.85"
             dur="2.2s"
             repeatCount="indefinite"/>
  </text>

  <!-- subtitle -->
  <text x="50%" y="82%"
        text-anchor="middle"
        font-family="JetBrains Mono, monospace"
        font-size="14"
        fill="#9AEFE3"
        letter-spacing="3">
    BYPASS ORGANIZATION
  </text>

  <!-- scan line -->
  <line x1="40" y1="130" x2="640" y2="130"
        stroke="#7FE3D7"
        stroke-width="1"
        opacity="0.35">
    <animate attributeName="x1" from="40" to="640" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="x2" from="40" to="640" dur="2s" repeatCount="indefinite"/>
  </line>

</svg>

</div>
