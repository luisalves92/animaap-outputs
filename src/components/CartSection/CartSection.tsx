/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconCancel1 } from "../../icons/IconCancel1";
import { MonitorCartSmall } from "../MonitorCartSmall";
import { Quantity } from "../Quantity";

export const CartSection = (): JSX.Element => {
  return (
    <div className="relative w-[1170px] h-[102px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
      <div className="left-[387px] absolute top-[38px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
        $650
      </div>
      <div className="left-[1063px] absolute top-[38px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
        $650
      </div>
      <Quantity className="!absolute !left-[708px] !top-[28px]" quantity="quantity-1" />
      <div className="absolute w-[64px] h-[58px] top-[20px] left-[30px]">
        <MonitorCartSmall className="!absolute !left-[10px] !top-[4px]" />
        <IconCancel1 className="!absolute !w-[24px] !h-[24px] !top-0 !left-0" />
      </div>
      <div className="absolute top-[38px] left-[114px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-black text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
        LCD Monitor
      </div>
    </div>
  );
};
