import React from "react";

export default function AnimatedLogo({
  size = 80,
  animated = true,
  suppressAAnimation = false,
}: {
  size?: number;
  animated?: boolean;
  suppressAAnimation?: boolean;
}) {
  const width = Math.min(Math.max(size, 48), 400);

  return (
    <div className="avenox-logo-wrapper" style={{ width, maxWidth: "100%" }}>
      <img
        src="/Logo-.png"
        alt="Avenox Steel Services LLC logo"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: 'none',
          background: 'transparent',
        }}
      />
      <style>{`
        .avenox-logo-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }
        .avenox-logo-wrapper img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          background: transparent;
        }
      `}</style>
    </div>
  );
}
