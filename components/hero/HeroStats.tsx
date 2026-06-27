"use client";

export default function HeroStats() {
  const stats = [
    {
      value: "2+",
      label: "Projets",
    },
    {
      value: "8+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Responsive",
    },
    {
      value: "2026",
      label: "Disponible",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
        >
          <h3 className="text-3xl font-black text-blue-500">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  );
}