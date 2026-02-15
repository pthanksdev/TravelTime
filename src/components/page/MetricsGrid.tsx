import { type ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Metric = {
  label: string;
  value: string;
  icon?: ReactNode;
};

type MetricsGridProps = {
  metrics: Metric[];
};

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="bg-card/90">
          <CardHeader className="flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
            {metric.icon}
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
