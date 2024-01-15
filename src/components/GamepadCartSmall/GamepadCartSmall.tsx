/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const GamepadCartSmall = ({ className }: Props): JSX.Element => {
  return (
    <div className={`relative w-[54px] h-[54px] ${className}`}>
      <img
        className="absolute w-[49px] h-[42px] top-[6px] left-[3px]"
        alt="G x"
        src="https://c.animaapp.com/BKsFGFjV/img/g92-2-500x500-1-1@2x.png"
      />
    </div>
  );
};
