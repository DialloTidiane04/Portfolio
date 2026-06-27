type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-500/20
      bg-blue-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-blue-400
      transition-all
      duration-300
      hover:border-blue-500
      hover:bg-blue-500/20
      hover:text-white
      "
    >
      {children}
    </span>
  );
}