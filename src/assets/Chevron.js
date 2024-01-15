import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../utils/constants";
const Chevron = (props) => (
  <Svg
    baseProfile="tiny"
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      fill={colors.PRIMARY}
      d="M8.586,5.586c-0.781,0.781-0.781,2.047,0,2.828L12.171,12l-3.585,3.586c-0.781,0.781-0.781,2.047,0,2.828  C8.976,18.805,9.488,19,10,19s1.024-0.195,1.414-0.586L17.829,12l-6.415-6.414C10.634,4.805,9.366,4.805,8.586,5.586z"
    />
  </Svg>
);
export default Chevron;
