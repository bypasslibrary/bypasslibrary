<div align="center">

<svg width="700" height="160" viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">

  <!-- background -->
  <rect width="100%" height="100%" fill="#0D1117"/>

  <!-- title -->
  <text x="40" y="60"
        font-family="JetBrains Mono, monospace"
        font-size="34"
        fill="#7FE3D7"
        opacity="0">
    BYPASSLIBRALI
    <animate attributeName="opacity"
             from="0" to="1"
             dur="1.2s"
             fill="freeze"/>
  </text>

  <!-- subtitle -->
  <text x="40" y="90"
        font-family="JetBrains Mono, monospace"
        font-size="14"
        fill="#9AEFE3"
        opacity="0">
    BYPASS ORGANIZATION
    <animate attributeName="opacity"
             from="0" to="1"
             dur="1.4s"
             begin="0.6s"
             fill="freeze"/>
  </text>

  <!-- blinking cursor -->
  <rect x="300" y="38" width="10" height="26" fill="#7FE3D7">
    <animate attributeName="opacity"
             values="1;0;1"
             dur="1s"
             repeatCount="indefinite"/>
  </rect>

  <!-- moving scan line -->
  <rect y="130" width="160" height="2" fill="#7FE3D7" opacity="0.5">
    <animateTransform attributeName="transform"
                      type="translate"
                      from="-160 0"
                      to="860 0"
                      dur="2s"
                      repeatCount="indefinite"/>
  </rect>

</svg>

</div>
