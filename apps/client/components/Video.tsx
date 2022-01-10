import React, { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  path: string;
}

export function Video({ path, style }: Props) {
  return (
    <video
      id="myVideo"
      style={style}
      playsInline
      autoPlay
      muted
      loop
      poster="images/video.jpg"
    >
      <source src={path} type="video/mp4" />
    </video>
  );
}
