import React from 'react';
import { Group } from '@visx/group';
import { Pie } from '@visx/shape';
import { GradientTealBlue } from '@visx/gradient';
import { genStats } from '@visx/mock-data';

const data = genStats(4);

const width = 400;
const height = 400;
const radius = Math.min(width, height) / 2;

const ResourcesByDir = () => {
  return (
    <svg width={width} height={height}>
      <GradientTealBlue id="tealBlue" />
      <Group top={height / 2} left={width / 2}>
        <Pie
          data={data}
          pieValue={d => d.pageViews}
          outerRadius={radius}
          innerRadius={radius / 2}
          cornerRadius={5}
          padAngle={0.02}
        >
          {({ arcs }) => (
            arcs.map((arc, index) => {
              const { centroid, path } = arc;
              return (
                <g key={`arc-${index}`}>
                  <path d={path} fill={`url(#tealBlue)`} />
                  <text
                    x={centroid[0]}
                    y={centroid[1]}
                    dy=".33em"
                    fontSize={12}
                    textAnchor="middle"
                    fill="white"
                  >
                    {data[index].pageViews}
                  </text>
                </g>
              );
            })
          )}
        </Pie>
      </Group>
    </svg>
  );
};
export default ResourcesByDir;