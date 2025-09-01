import { useState } from "react";

const Jirachi = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const base = import.meta.env.BASE_URL || "/";
  return (
    <img
      src={`${base}jirachi.gif`}
      alt="Jirachi pixel sprite"
      className="absolute top-10 right-10 z-50 w-24 md:w-32 select-none pointer-events-none drop-shadow-md"
      onError={() => setVisible(false)}
    />
  );
};

export default Jirachi;
