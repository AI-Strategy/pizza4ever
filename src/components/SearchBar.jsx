export default function SearchBar() {
  return (
    <div className="px-6 py-4 border-b border-slate-700">
      <label className="flex flex-col min-w-40 h-12 w-full max-w-md">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
          <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="Search by Order ID or Customer Name" defaultValue="" />
        </div>
      </label>
    </div>
  )
}
