import { constants } from "@/constants";
import MetricCard from "./metric-card";

const MetricsSection = () => {
  return (
    <section className="xl:grid-cols-3 md:grid-cols-2 grid gap-2  md:mt-6">
      {constants.METRICS.map((metric, index) => (
        <MetricCard key={index} metric={metric} index={index} />
      ))}
    </section>
  );
};

export default MetricsSection;
