"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns/format";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PerformanceChart = ({ assessments }) => {
  const [cartData, setChartData] = useState([]);
  console.log(cartData);

  useEffect(() => {
    if (assessments) {
      const formatData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      setChartData(formatData);
    }
  }, [assessments]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={"gradient-title text-3xl md:text-4xl"}>
          Performance Trend
        </CardTitle>
        <CardDescription>Your quiz over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={cartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-background border rounded-lg p-2 shadow-md">
                        <p className="text-sm font-medium">
                          Score: {payload[0].value}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          date: {payload[0].payload.date}
                        </p>
                      </div>
                    );
                  }
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#9098A4"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
