import React from "react";

const DeveloperIllustration = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto p-8 ${className}`}>
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        {/* Background */}
        <rect width="800" height="600" fill="var(--background)" />

        {/* Floor/Ground */}
        <ellipse
          cx="400"
          cy="580"
          rx="300"
          ry="20"
          fill="var(--muted)"
          opacity="0.3"
        />

        {/* Desk */}
        <path
          d="M150 400 L650 400 L680 450 L120 450 Z"
          fill="var(--card)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <rect x="140" y="450" width="20" height="80" fill="var(--muted)" />
        <rect x="640" y="450" width="20" height="80" fill="var(--muted)" />

        {/* Monitor Stand */}
        <rect
          x="480"
          y="350"
          width="40"
          height="50"
          fill="var(--muted-foreground)"
        />
        <rect
          x="460"
          y="395"
          width="80"
          height="10"
          fill="var(--muted-foreground)"
        />

        {/* Monitor */}
        <rect
          x="420"
          y="200"
          width="280"
          height="180"
          rx="8"
          fill="var(--card)"
          stroke="var(--border)"
          strokeWidth="3"
        />
        <rect
          x="430"
          y="210"
          width="260"
          height="160"
          fill="var(--background)"
        />

        {/* Code Editor Interface */}
        <rect x="430" y="210" width="260" height="25" fill="var(--primary)" />
        <circle cx="445" cy="222" r="4" fill="var(--destructive)" />
        <circle cx="460" cy="222" r="4" fill="var(--chart-4)" />
        <circle cx="475" cy="222" r="4" fill="var(--chart-2)" />

        {/* Code Lines */}
        <rect
          x="440"
          y="250"
          width="80"
          height="3"
          fill="var(--primary)"
          opacity="0.8"
        />
        <rect
          x="450"
          y="260"
          width="120"
          height="3"
          fill="var(--chart-1)"
          opacity="0.7"
        />
        <rect
          x="450"
          y="270"
          width="90"
          height="3"
          fill="var(--chart-2)"
          opacity="0.7"
        />
        <rect
          x="440"
          y="280"
          width="110"
          height="3"
          fill="var(--foreground)"
          opacity="0.5"
        />
        <rect
          x="450"
          y="290"
          width="140"
          height="3"
          fill="var(--chart-3)"
          opacity="0.7"
        />
        <rect
          x="450"
          y="300"
          width="70"
          height="3"
          fill="var(--chart-4)"
          opacity="0.7"
        />
        <rect
          x="440"
          y="310"
          width="100"
          height="3"
          fill="var(--primary)"
          opacity="0.8"
        />
        <rect
          x="450"
          y="320"
          width="160"
          height="3"
          fill="var(--chart-1)"
          opacity="0.7"
        />
        <rect
          x="440"
          y="330"
          width="85"
          height="3"
          fill="var(--chart-5)"
          opacity="0.7"
        />
        <rect
          x="450"
          y="340"
          width="125"
          height="3"
          fill="var(--foreground)"
          opacity="0.5"
        />

        {/* Floating Code Window */}
        <rect
          x="520"
          y="120"
          width="180"
          height="120"
          rx="6"
          fill="var(--card)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <rect x="525" y="125" width="170" height="20" fill="var(--secondary)" />
        <rect
          x="535"
          y="155"
          width="60"
          height="2"
          fill="var(--chart-1)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="165"
          width="90"
          height="2"
          fill="var(--chart-2)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="175"
          width="75"
          height="2"
          fill="var(--chart-3)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="185"
          width="110"
          height="2"
          fill="var(--primary)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="195"
          width="85"
          height="2"
          fill="var(--chart-4)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="205"
          width="95"
          height="2"
          fill="var(--chart-5)"
          opacity="0.8"
        />
        <rect
          x="535"
          y="215"
          width="70"
          height="2"
          fill="var(--foreground)"
          opacity="0.6"
        />

        {/* Single Fullstack Tag */}
        <g transform="translate(80, 220) rotate(-12)">
          <rect width="120" height="50" rx="10" fill="var(--chart-2)" />
          <text
            x="60"
            y="32"
            textAnchor="middle"
            fill="var(--primary-foreground)"
            fontSize="16"
            fontWeight="bold"
          >
            FULLSTACK
          </text>
        </g>

        {/* Realistic Office Chair */}
        {/* Chair base with wheels */}
        <ellipse
          cx="350"
          cy="520"
          rx="50"
          ry="8"
          fill="var(--muted-foreground)"
        />
        <circle
          cx="320"
          cy="520"
          r="6"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle
          cx="350"
          cy="530"
          r="6"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle
          cx="380"
          cy="520"
          r="6"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle
          cx="335"
          cy="505"
          r="6"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <circle
          cx="365"
          cy="505"
          r="6"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Chair column */}
        <rect
          x="345"
          y="480"
          width="10"
          height="40"
          fill="var(--muted-foreground)"
        />

        {/* Chair seat */}
        <ellipse cx="350" cy="480" rx="45" ry="35" fill="var(--primary)" />
        <ellipse
          cx="350"
          cy="475"
          rx="40"
          ry="30"
          fill="var(--primary)"
          opacity="0.8"
        />

        {/* Chair backrest */}
        <path
          d="M305 470 Q305 420 320 400 L380 400 Q395 420 395 470 Q395 480 380 480 L320 480 Q305 480 305 470 Z"
          fill="var(--primary)"
        />
        <path
          d="M315 465 Q315 430 325 415 L375 415 Q385 430 385 465"
          fill="var(--primary)"
          opacity="0.9"
        />

        {/* Chair armrests */}
        <ellipse cx="305" cy="450" rx="8" ry="25" fill="var(--primary)" />
        <ellipse cx="395" cy="450" rx="8" ry="25" fill="var(--primary)" />

        {/* Realistic Developer Character */}
        {/* Head */}
        <circle cx="350" cy="320" r="25" fill="var(--card)" />

        {/* Hair */}
        <path
          d="M325 310 Q350 295 375 310 Q375 300 350 297 Q325 300 325 310"
          fill="var(--foreground)"
        />
        <path
          d="M330 305 Q350 290 370 305"
          fill="var(--foreground)"
          opacity="0.7"
        />

        {/* Face features */}
        <circle
          cx="342"
          cy="318"
          r="2"
          fill="var(--foreground)"
          opacity="0.8"
        />
        <circle
          cx="358"
          cy="318"
          r="2"
          fill="var(--foreground)"
          opacity="0.8"
        />
        <path
          d="M345 328 Q350 330 355 328"
          stroke="var(--foreground)"
          strokeWidth="1"
          fill="none"
        />

        {/* Glasses */}
        <circle
          cx="342"
          cy="320"
          r="10"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="2.5"
        />
        <circle
          cx="358"
          cy="320"
          r="10"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="2.5"
        />
        <line
          x1="352"
          y1="320"
          x2="348"
          y2="320"
          stroke="var(--foreground)"
          strokeWidth="2"
        />
        <line
          x1="332"
          y1="320"
          x2="325"
          y2="318"
          stroke="var(--foreground)"
          strokeWidth="2"
        />
        <line
          x1="368"
          y1="320"
          x2="375"
          y2="318"
          stroke="var(--foreground)"
          strokeWidth="2"
        />

        {/* Neck */}
        <rect x="345" y="340" width="10" height="15" fill="var(--card)" />

        {/* Torso */}
        <ellipse
          cx="350"
          cy="400"
          rx="35"
          ry="55"
          fill="var(--chart-2)"
          opacity="0.9"
        />

        {/* Arms in natural typing position */}
        {/* Left arm */}
        <ellipse
          cx="320"
          cy="380"
          rx="12"
          ry="30"
          fill="var(--chart-2)"
          opacity="0.9"
          transform="rotate(-20 320 380)"
        />
        <ellipse
          cx="310"
          cy="410"
          rx="10"
          ry="20"
          fill="var(--chart-2)"
          opacity="0.9"
          transform="rotate(30 310 410)"
        />
        <circle cx="305" cy="425" r="8" fill="var(--card)" />

        {/* Right arm */}
        <ellipse
          cx="380"
          cy="380"
          rx="12"
          ry="30"
          fill="var(--chart-2)"
          opacity="0.9"
          transform="rotate(20 380 380)"
        />
        <ellipse
          cx="390"
          cy="410"
          rx="10"
          ry="20"
          fill="var(--chart-2)"
          opacity="0.9"
          transform="rotate(-30 390 410)"
        />
        <circle cx="395" cy="425" r="8" fill="var(--card)" />

        {/* Legs in sitting position */}
        <ellipse
          cx="335"
          cy="480"
          rx="12"
          ry="35"
          fill="var(--foreground)"
          transform="rotate(-10 335 480)"
        />
        <ellipse
          cx="365"
          cy="480"
          rx="12"
          ry="35"
          fill="var(--foreground)"
          transform="rotate(10 365 480)"
        />

        {/* Feet */}
        <ellipse
          cx="325"
          cy="515"
          rx="15"
          ry="6"
          fill="var(--chart-2)"
          transform="rotate(-15 325 515)"
        />
        <ellipse
          cx="375"
          cy="515"
          rx="15"
          ry="6"
          fill="var(--chart-2)"
          transform="rotate(15 375 515)"
        />

        {/* Keyboard */}
        <rect
          x="300"
          y="420"
          width="100"
          height="35"
          rx="4"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <rect
          x="305"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="313"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="321"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="329"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="337"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="345"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="353"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="361"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="369"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="377"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="385"
          y="425"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />

        <rect
          x="308"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="316"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="324"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="332"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="340"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="348"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="356"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="364"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="372"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />
        <rect
          x="380"
          y="433"
          width="6"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />

        <rect
          x="320"
          y="441"
          width="50"
          height="5"
          rx="1"
          fill="var(--muted-foreground)"
        />

        {/* Mouse */}
        <ellipse
          cx="420"
          cy="435"
          rx="10"
          ry="15"
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
        />
        <line
          x1="420"
          y1="427"
          x2="420"
          y2="438"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Plant */}
        <ellipse cx="180" cy="520" rx="25" ry="10" fill="var(--chart-2)" />
        <path
          d="M160 510 Q165 480 170 485 Q175 490 180 480 Q185 485 190 480 Q195 490 200 485 Q205 480 210 510"
          fill="var(--chart-2)"
        />
        <path
          d="M165 500 Q170 470 175 475 Q180 480 185 470 Q190 475 195 470 Q200 480 205 475"
          fill="var(--chart-2)"
        />
        <rect
          x="170"
          y="510"
          width="20"
          height="15"
          rx="10"
          fill="var(--chart-1)"
        />
      </svg>
    </div>
  );
};

export default DeveloperIllustration;
