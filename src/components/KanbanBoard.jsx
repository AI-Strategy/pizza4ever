export default function KanbanBoard({ children }) {
  return (
    <div className="flex-1 flex gap-6 p-6 overflow-x-auto">
      {children}
    </div>
  )
}
