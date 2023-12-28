import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Bell = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.7143 17.25C13.7143 18.2165 12.9468 19 12 19C11.0532 19 10.2857 18.2165 10.2857 17.25M12 5V5C9.51472 5 7.5 7.01472 7.5 9.5V10.8079C7.5 11.5944 7.34024 12.3728 7.0304 13.0957L6.59739 14.1061C6.31459 14.7659 6.79862 15.5 7.51654 15.5H16.4835C17.2014 15.5 17.6854 14.7659 17.4026 14.1061L16.9696 13.0957C16.6598 12.3728 16.5 11.5944 16.5 10.8079V9.5C16.5 7.01472 14.4853 5 12 5V5ZM12 5V4"
      stroke="#464455"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Bell;
