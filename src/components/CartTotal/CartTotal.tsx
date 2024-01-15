/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";

export const CartTotal = (): JSX.Element => {
  return (
    <div className="relative w-[470px] h-[324px] rounded-[4px] overflow-hidden border-[1.5px] border-solid border-black">
      <div className="absolute top-[30px] left-[24px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text-2 text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
        Cart Total
      </div>
      <div className="inline-flex items-start gap-[307px] absolute top-[84px] left-[24px]">
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          Subtotal:
        </div>
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          $1750
        </div>
      </div>
      <div className="inline-flex items-start gap-[314px] absolute top-[140px] left-[24px]">
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          Shipping:
        </div>
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          Free
        </div>
      </div>
      <div className="inline-flex items-start gap-[335px] absolute top-[196px] left-[24px]">
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          Total:
        </div>
        <div className="relative w-fit mt-[-1.00px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          $1750
        </div>
      </div>
      <Button
        button="primary"
        className="!absolute !left-[89px] !top-[236px]"
        hover={false}
        text="Procees to checkout"
      />
      <div className="top-[124px] absolute w-[422px] h-px left-[24px] opacity-40">
        <img
          className="absolute w-[422px] h-px -top-px left-0 object-cover"
          alt="Line"
          src="https://c.animaapp.com/BKsFGFjV/img/line-1-10.svg"
        />
      </div>
      <div className="top-[180px] absolute w-[422px] h-px left-[24px] opacity-40">
        <img
          className="absolute w-[422px] h-px -top-px left-0 object-cover"
          alt="Line"
          src="https://c.animaapp.com/BKsFGFjV/img/line-1-10.svg"
        />
      </div>
    </div>
  );
};
