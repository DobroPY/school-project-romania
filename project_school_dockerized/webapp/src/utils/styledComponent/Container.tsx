import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Container;
