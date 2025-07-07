import Link from "next/link";

export default function Card({title, description, action}:{ title: string, description: string, action: string}) {
  return (
    <div className="relative z-10 bg-white ring-1 ring-slate-900/5 rounded-lg shadow-xl px-6 py-5 my-auto xl:mt-18 dark:bg-slate-800">
      <h3 className="text-center text-blue-950 font-bold text-xl mb-3">
        {title}
      </h3>
      <p className="text-slate-600">
        {description}
      </p>
      <Link
        href={action}
        className="w-48 mt-10 text-center block mx-auto active:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 bg-blue-950 hover:bg-transparent hover:text-blue-950 text-white p-2 pt-1 border-2 border-blue-950 rounded-lg font-semibold"
      >
        ¡Comenzemos!
      </Link>
    </div>
  );
}
