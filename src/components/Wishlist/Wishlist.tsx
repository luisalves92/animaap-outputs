/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { WishlistOff } from "../../icons/WishlistOff";

interface Props {
  wishlist: "off" | "on";
  wishlistOnClassName: any;
}

export const Wishlist = ({ wishlist, wishlistOnClassName }: Props): JSX.Element => {
  return (
    <>
      {wishlist === "off" && <WishlistOff className="!absolute !w-[32px] !h-[32px] !top-0 !left-0" />}

      {wishlist === "on" && (
        <div className={`w-[32px] h-[32px] overflow-hidden ${wishlistOnClassName}`}>
          <div className="relative w-[29px] h-[26px] left-[5px]">
            <img
              className="absolute w-[22px] h-[20px] top-[6px] left-0"
              alt="Vector"
              src="https://c.animaapp.com/BKsFGFjV/img/vector-5.svg"
            />
            <div className="absolute w-[18px] h-[17px] top-0 left-[11px]">
              <div className="relative w-[16px] h-[17px]">
                <div className="absolute w-[16px] h-[16px] top-px left-0 bg-secondary-2 rounded-[8px]" />
                <div className="absolute w-[7px] top-0 left-[4px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-text text-[length:var(--title-12px-regular-font-size)] text-center tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
