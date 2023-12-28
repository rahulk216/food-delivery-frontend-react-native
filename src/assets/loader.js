import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */
const Loader = (props) => (
  <Svg
    id="L9"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 0 0"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      fill="#fff"
      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
    ></Path>
  </Svg>
);
export default Loader;
