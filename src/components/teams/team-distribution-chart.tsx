"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { dataPie } from "@/lib/data-pie";

export const TeamDistributionChart = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          separator=": "
          labelClassName="font-bold"
          wrapperClassName="[&_.recharts-tooltip-item]:!text-black dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Pie data={dataPie} dataKey="value" nameKey="name">
          {dataPie.map((item, i) => (
            <Cell key={i} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
