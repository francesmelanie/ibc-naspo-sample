import { motion } from "@/lib/motion";
import { Users, Layers, Truck, Network } from "lucide-react";

const pillars = [
  { icon: Users, label: "Scalable Staffing" },
  { icon: Layers, label: "Program Management" },
  { icon: Truck, label: "Logistics Coordination" },
  { icon: Network, label: "Field Support Services" },
];

export function OperationalCallout() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a14] text-background">
      <div className="ibc-container relative py-14 md:py-20">
        <div className="grid gap-10 md:gap-14 md:grid-cols-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-white">
              Supporting government agencies through{" "}
              <span className="text-gradient-brand">scalable operational services.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col gap-10"
          >
            <div className="space-y-5">
              <p className="text-base sm:text-lg leading-relaxed text-background/80">
                Innovative Business Concepts (IBC) supports public-sector agencies, emergency
                response initiatives, and community-based operational programs through scalable
                staffing, program management, logistics coordination, and field support services.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-background/60">
                IBC is structured to support cooperative purchasing environments, multi-site
                deployments, subcontractor coordination, and rapid operational mobilization across
                public-sector initiatives.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="group rounded-2xl border border-background/15 bg-background/[0.04] p-5 sm:p-6 min-h-[140px] flex flex-col justify-between hover:bg-background/[0.08] hover:border-background/30 transition-colors"
                >
                  <p.icon className="h-5 w-5 text-background/80 group-hover:text-background transition-colors" />
                  <p className="mt-4 text-sm sm:text-[15px] font-medium leading-snug text-white">
                    {p.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
