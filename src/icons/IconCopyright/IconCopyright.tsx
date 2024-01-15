/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconCopyright = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5003 18.3333C15.1027 18.3333 18.8337 14.6023 18.8337 9.99996C18.8337 5.39759 15.1027 1.66663 10.5003 1.66663C5.89795 1.66663 2.16699 5.39759 2.16699 9.99996C2.16699 14.6023 5.89795 18.3333 10.5003 18.3333Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.0003 8.14811C13.0003 8.14811 11.9709 6.66663 10.2552 6.66663C8.53954 6.66663 7.16699 8.14811 7.16699 9.99996C7.16699 11.8518 8.53954 13.3333 10.2552 13.3333C11.9709 13.3333 13.0003 11.8518 13.0003 11.8518"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
