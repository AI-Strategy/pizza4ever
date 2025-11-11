export default function KanbanColumn({ title, count, children }) {
  return (
    <div className="flex-shrink-0 w-96 flex flex-col gap-4">
      <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 flex items-center gap-2">
        {title} <span className="bg-primary/20 text-primary text-sm font-bold px-2 py-1 rounded-full">{count}</span>
      </h2>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
