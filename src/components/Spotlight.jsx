import { useEffect, useState } from "react";

function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        left: position.x - 180,
        top: position.y - 180,
      }}
    />
  );
}

export default Spotlight;