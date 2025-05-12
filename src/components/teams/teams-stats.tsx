import React, { Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ListChecksIcon,
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { teamLeaders } from "@/lib/teamLeaders";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import { TeamDistributionChart } from "./team-distribution-chart";
import { SupportTicketResolved } from "./support-tickets-resolved";

export const TeamsStats = () => {
  console.log("leaders list: ", teamLeaders);
  return (
    <Fragment>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gag-2">
              <UsersIcon />
              <span className="text-5xl font-bold">8</span>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team Leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map(({ firstName, lastName, avatar }) => (
              <TooltipProvider key={`${firstName}${lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!avatar && (
                        <Image
                          src={avatar}
                          alt={`${firstName} ${lastName} avatar`}
                          width="64"
                          height="64"
                        />
                      )}
                      <AvatarFallback>
                        {firstName[0]}
                        {lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {firstName} {lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team Distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketResolved />
        </CardContent>
      </Card>
    </Fragment>
  );
};
