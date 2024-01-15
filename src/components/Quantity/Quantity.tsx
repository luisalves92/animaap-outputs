/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { DropDownSmall2 } from "../../icons/DropDownSmall2";
import { DropUpSmall4 } from "../../icons/DropUpSmall4";

interface Props {
  quantity: "quantity-1" | "quantity-2" | "quantity-3";
  className: any;
}

export const Quantity = ({ quantity, className }: Props): JSX.Element => {
  return (
    <div
      className={`border-[1.5px] border-solid border-[#00000066] w-[75px] h-[47px] overflow-hidden rounded-[4px] ${className}`}
    >
      <div
        className={`w-[48px] left-[12px] flex items-center top-[6px] relative ${
          quantity === "quantity-1" ? "gap-[16px]" : "gap-[12px]"
        }`}
      >
        <div className="font-title-16px-regular w-fit tracking-[var(--title-16px-regular-letter-spacing)] [font-style:var(--title-16px-regular-font-style)] text-[length:var(--title-16px-regular-font-size)] text-button relative font-[number:var(--title-16px-regular-font-weight)] whitespace-nowrap leading-[var(--title-16px-regular-line-height)]">
          {quantity === "quantity-1" && <>01</>}

          {quantity === "quantity-2" && <>02</>}

          {quantity === "quantity-3" && <>03</>}
        </div>
        <div className="inline-flex flex-col items-start flex-[0_0_auto] relative">
          <DropUpSmall4 className="!relative !w-[16px] !h-[16px]" />
          <DropDownSmall2 className="!relative !w-[16px] !h-[16px]" color="black" />
        </div>
      </div>
    </div>
  );
};
