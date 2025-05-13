import React from "react";
import { setTimeout } from "timers/promises";

import { employees } from "@/lib/employees";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const EmployeesPage = async () => {
  await setTimeout(3000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={employees} columns={columns} />
      </CardContent>
    </Card>
  );
};

export default EmployeesPage;
