import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserIcon,
  UserCheck2Icon,
  BadgeCheckIcon,
  UserRoundXIcon,
  AlertTriangleIcon,
  PartyPopperIcon,
  LaptopIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import cm from "../../../public/images/cm.jpg";
import { WorkLocationTrends } from "./work-location-trends";

export const EmployeesStats = () => {
  const totalEmployees = 100;
  const employeesPresent = 70;
  const employeesPresentPersentage = (employeesPresent / totalEmployees) * 100;

  return (
    <Fragment>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              <UserIcon />
              <span className="text-5xl font-bold">{totalEmployees}</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          <CardContent className="fexl justify-between">
            <div className="flex gap-2">
              {employeesPresentPersentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <span className="text-5xl font-bold">{employeesPresent}</span>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPersentage > 75 ? (
              <span className="text-xs text-green-500 flex gap-1 items-center">
                <BadgeCheckIcon />
                {employeesPresentPersentage}% of employees are present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-1 items-center">
                <AlertTriangleIcon />
                {employeesPresentPersentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the Month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={cm} alt="employee of the month" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2x1">Colin Murray!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Colin</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employeee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </Fragment>
  );
};
