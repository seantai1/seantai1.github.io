import { useState } from "react";

const Dialga = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const base = import.meta.env.BASE_URL || "/";

  return (
    <img
      src={`${base}dialga.gif`}
      alt="Dialga pixel sprite"
      className="absolute top-15 right-10 z-50 w-20 md:w-20 lg:w-24 select-none pointer-events-none drop-shadow-md"
      style={{ imageRendering: "pixelated" }}
      onError={() => setVisible(false)}
    />
  );
};

export default Dialga;

