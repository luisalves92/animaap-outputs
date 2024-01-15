import React from "react";
import { Button } from "../../components/Button";
import { CartMainSection } from "../../components/CartMainSection";
import { CartSection } from "../../components/CartSection";
import { CartTotal } from "../../components/CartTotal";
import { CouponCode } from "../../components/CouponCode";
import { Footer } from "../../components/Footer";
import { GamepadCartSmall } from "../../components/GamepadCartSmall";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { Line } from "../../components/Line";
import { Quantity } from "../../components/Quantity";
import { Roadmap } from "../../components/Roadmap";
import { TopHeader } from "../../components/TopHeader";
import { Wishlist } from "../../components/Wishlist";
import { Googleplay1 } from "../../icons/Googleplay1";

export const Cart = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-bg w-[1440px] h-[1743px] relative">
        <div className="inline-flex flex-col items-start gap-[80px] absolute top-[323px] left-[135px]">
          <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
              <CartMainSection className="!relative" />
              <CartSection />
              <div className="relative w-[1170px] h-[102px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
                <div className="left-[387px] absolute top-[38px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                  $550
                </div>
                <div className="left-[1063px] absolute top-[38px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                  $1100
                </div>
                <Quantity className="!absolute !left-[708px] !top-[28px]" quantity="quantity-2" />
                <GamepadCartSmall className="!absolute !left-[40px] !top-[24px]" />
                <div className="absolute top-[38px] left-[114px] font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-black text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
                  H1 Gamepad
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-[757px] relative flex-[0_0_auto]">
              <Button button="secondary" className="!flex-[0_0_auto]" hover={false} text="Return To Shop" />
              <Button button="secondary" className="!flex-[0_0_auto]" hover={false} text="Update Cart" />
            </div>
          </div>
          <div className="inline-flex items-start gap-[173px] relative flex-[0_0_auto]">
            <CouponCode className="!flex-[0_0_auto]" />
            <CartTotal />
          </div>
        </div>
        <Footer
          className="!absolute !left-0 !top-[1303px]"
          icon={<Googleplay1 className="!relative !w-[110px] !h-[40px]" />}
        />
        <Roadmap
          className="!absolute !left-[135px] !top-[222px]"
          hasDiv={false}
          hasDiv1={false}
          hasImg={false}
          hasLine={false}
          hasLine1={false}
          line="https://c.animaapp.com/BKsFGFjV/img/line-13-1.svg"
          text="Home"
          text1="Cart"
          visible={false}
        />
        <TopHeader className="!absolute !left-0 !top-0" />
        <div className="absolute w-[1440px] h-[54px] top-[88px] left-0">
          <HeaderWrapper
            className="!gap-[130px] !absolute !left-[135px] !top-0"
            headerHeader="home"
            icon={<Wishlist wishlist="on" wishlistOnClassName="!relative" />}
          />
          <Line className="!absolute !left-0 !top-[54px]" />
        </div>
      </div>
    </div>
  );
};
