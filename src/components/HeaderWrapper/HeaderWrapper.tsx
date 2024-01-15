/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { UserOff } from "../../icons/UserOff";
import { WishlistOff } from "../../icons/WishlistOff";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SearchComponentSet } from "../SearchComponentSet";
import { WithBuy } from "../WithBuy";

interface Props {
  className: any;
  headerHeader: string;
  icon: JSX.Element;
}

export const HeaderWrapper = ({
  className,
  headerHeader = "header-home-hover",
  icon = <WishlistOff className="!relative !w-[32px] !h-[32px]" />,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[148px] relative ${className}`}>
      <div className="inline-flex items-start gap-[160px] relative flex-[0_0_auto]">
        <Logo />
        <div className="inline-flex items-start gap-[48px] relative flex-[0_0_auto]">
          <Header className="!flex-[0_0_auto]" header={headerHeader} />
          <Header header="contact" />
          <Header header="about" />
          <Header header="sign-up" />
        </div>
      </div>
      <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
        <SearchComponentSet className="!flex-[0_0_auto]" property1="active" />
        <div className="inline-flex items-center justify-center gap-[16px] relative flex-[0_0_auto]">
          {icon}
          <WithBuy cart="on" className="!relative" />
          <UserOff className="!relative !w-[32px] !h-[32px]" />
        </div>
      </div>
    </div>
  );
};
