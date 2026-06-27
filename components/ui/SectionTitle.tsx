type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}