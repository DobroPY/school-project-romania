import React from "react";

type FlexProps = {
  customStyle?: string;
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({ customStyle, children }) => {
  return <div className={`flex items-center ${customStyle}`}>{children}</div>;
};

export default Flex;
