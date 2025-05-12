"use client";
import React from "react";

import { supportTicketData } from "@/lib/support-tickets-data";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Tooltip } from "recharts";

export const SupportTicketResolved = () => {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={supportTicketData}>
        <Tooltip
          separator=": "
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border capitalize"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="canary" stroke="#3b8216" />
        <Line type="monotone" dataKey="alpha" stroke="#f97316" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
