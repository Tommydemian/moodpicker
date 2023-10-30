import React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    fill={props.color}
    {...props}>
    <Path d="M22 5.724V2a1 1 0 1 0-2 0v2.366L14.797.855a4.98 4.98 0 0 0-5.594 0l-7 4.724A4.995 4.995 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h3a1 1 0 0 0 1-1v-8c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v8a1 1 0 0 0 1 1h3c2.757 0 5-2.243 5-5V9.724a4.995 4.995 0 0 0-2-4ZM22 19c0 1.654-1.346 3-3 3h-2v-7c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v7H5c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.929 1.322-2.487l7-4.724a2.985 2.985 0 0 1 3.355 0l7 4.724a2.995 2.995 0 0 1 1.322 2.487V19Z" />
  </Svg>
);

export const AnalyticsIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    fill={props.color}
    {...props}>
    <Path d="M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" />
    <Path d="M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM10 10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0ZM15 13v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0ZM20 9v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0ZM6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9Z" />
  </Svg>
);

export const ListIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 24 24" fill={props.color} {...props}>
    <Path d="M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
    <Circle cx={2} cy={5} r={2} />
    <Circle cx={2} cy={12} r={2} />
    <Circle cx={2} cy={19} r={2} />
  </Svg>
);
