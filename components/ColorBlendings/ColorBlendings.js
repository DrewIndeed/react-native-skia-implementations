import React from 'react';
import {Canvas, Circle, Group} from '@shopify/react-native-skia';

export const ColorBlendings = () => {
  const width = 256;
  const r = 200;
  return (
    <Canvas style={{height: 800}}>
      <Group blendMode="multiply">
        <Circle cx={width + r - 125} cy={r + 250} r={r} color="cyan" />
        <Circle cx={width - r} cy={r + 250} r={r} color="magenta" />
        <Circle cx={r} cy={r + 50} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};
