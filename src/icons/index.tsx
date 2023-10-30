import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill={props.color}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M22.849 7.68 21.98 7h.021V2h-2v3.451L13.849.637a2.993 2.993 0 0 0-3.697 0L1.151 7.68A2.983 2.983 0 0 0 0 10.043V24h9v-9c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v9h9V10.043c0-.929-.42-1.791-1.151-2.363ZM22 22h-5v-7c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v7H2V10.043c0-.31.14-.597.384-.788l9-7.043a.997.997 0 0 1 1.232 0l9 7.043a.994.994 0 0 1 .384.788V22Z" />
  </Svg>
);
