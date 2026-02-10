<div align="center">

<svg width="640" height="140" viewBox="0 0 640 140" xmlns="http://www.w3.org/2000/svg">

  <!-- background -->
  <rect width="100%" height="100%" fill="#0D1117"/>

  <!-- glow filter -->
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- title -->
  <text x="32" y="55"
        font-family="JetBrains Mono, monospace"
        font-size="30"
        fill="#7FE3D7"
        opacity="0"
        filter="url(#glow)">
    BYPASSLIBRALI
    <animate attributeName="opacity"
             from="0" to="1"
             dur="1.2s"
             fill="freeze"/>
    <animateTransform attributeName="transform"
                      type="translate"
                      from="0 6" to="0 0"
                      dur="1.2s"
                      fill="freeze"/>
  </text>

  <!-- subtitle -->
  <text x="32" y="85"
        font-family="JetBrains Mono, monospace"
        font-size="14"
        fill="#9AEFE3"
        opacity="0">
    [ BYPASS ORGANIZATION ]
    <animate attributeName="opacity"
             from="0" to="1"
             dur="1.4s"
             begin="0.8s"
             fill="freeze"/>
  </text>

  <!-- blinking cursor -->
  <rect x="260" y="38" width="10" height="20" fill="#7FE3D7">
    <animate attributeName="opacity"
             values="1;0;1"
             dur="1s"
             repeatCount="indefinite"/>
  </rect>

  <!-- scan line -->
  <line x1="32" y1="110" x2="600" y2="110"
        stroke="#7FE3D7" stroke-width="1" opacity="0.35">
    <animate attributeName="x2"
             from="32" to="600"
             dur="1.6s"
             fill="freeze"/>
  </line>

</svg>

</div>
