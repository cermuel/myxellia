import Layout from "@/components/layout/Layout";
import MetricsSection from "@/components/ui/metric-section";
import OverviewCard from "@/components/ui/overview-card";
import SalesCard from "@/components/ui/sales-card";
import { constants } from "@/constants";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full md:px-10 px-4 bg-[#FBFCFC] py-2.5 md:py-4 space-y-4">
        <h1 className="text-[#191919] text-[20px] font-bold">Welcome, Ahmed</h1>
        <section className="grid lg:grid-cols-3 gap-4">
          <SalesCard
            dateRange="Jan 2022 - Sep 2022"
            chartLabels={constants.CHART_LABELS}
            chartDataSets={constants.CHART_DATA_SETS}
            stats={constants.CHART_STATS}
          />
          <div className="col-span-1 space-y-4">
            {constants.OVERVIEW_STATS.map((overview) => (
              <OverviewCard {...overview} key={overview.icon} />
            ))}
          </div>
        </section>
        <MetricsSection />
      </div>
    </Layout>
  );
}
