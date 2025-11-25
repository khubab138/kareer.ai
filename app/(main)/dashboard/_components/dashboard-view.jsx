"use client";

import {
  Brain,
  Briefcase,
  BriefcaseIcon,
  LineChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashboardView = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min,
    max: range.max,
    median: range.median,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };

      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutLookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outLookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant={"outline"}>Last Updated: {lastUpdatedDate}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader
            className={
              "flex flex-row items-center justify-between  sapce-y-0 pb-2"
            }
          >
            <CardTitle className={"text-sm font-medium"}>
              Market Outlook
            </CardTitle>
            <OutLookIcon className={`h-4 w-4 ${outLookColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">
              Next Update Will be {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            className={
              "flex flex-row items-center justify-between  sapce-y-0 pb-2"
            }
          >
            <CardTitle className={"text-sm font-medium"}>
              Industry Growth
            </CardTitle>
            <TrendingUp className={`h-4 w-4 text-muted-foreground`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className={"mt-2"} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            className={
              "flex flex-row items-center justify-between  sapce-y-0 pb-2"
            }
          >
            <CardTitle className={"text-sm font-medium"}>
              Demand Level
            </CardTitle>
            <BriefcaseIcon className={`h-4 w-4 text-muted-foreground`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.demandLevel}</div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            className={
              "flex flex-row items-center justify-between  sapce-y-0 pb-1"
            }
          >
            <CardTitle className={"text-sm font-medium"}>Top Skills</CardTitle>
            <Brain className={`h-4 w-4 text-muted-foreground`} />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1 max-h-full overflow-hidden">
              {insights.topSkills.map((skill) => {
                return (
                  <Badge
                    key={skill}
                    variant={"secondary"}
                    className={"text-xs"}
                  >
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Graphs */}
      <Card>
        <CardHeader className={""}>
          <CardTitle className={""}>Salary Ranges by Roles</CardTitle>
          <CardDescription>
            Display minimum, medium and maximum salary (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium ">{label}</p>
                          {payload.map((item) => {
                            return (
                              <p key={item.name} className="text-sm">
                                {item.name}: ${item.value}
                              </p>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className={""}>
            <CardTitle className={""}>Key Industry Trends</CardTitle>
            <CardDescription>
              Current Trends shaping the Industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, i) => {
                return (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{trend}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={""}>
            <CardTitle className={""}>Recommended Skills </CardTitle>
            <CardDescription>Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.topSkills.map((skill) => {
                return (
                  <Badge
                    key={skill}
                    variant={"outline"}
                    className={"text-xs mx-1"}
                  >
                    {skill}
                  </Badge>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
