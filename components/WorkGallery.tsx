"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type Project, type WorkType, workTypes } from "@/lib/work";

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<WorkType | "All">("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.type === filter);
  const count = (t: WorkType) => projects.filter((p) => p.type === t).length;

  const filters: { label: WorkType | "All"; n: number }[] = [
    { label: "All", n: projects.length },
    ...workTypes.map((t) => ({ label: t, n: count(t) })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filter by type" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => {
          const active = filter === f.label;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setFilter(f.label)}
              aria-pressed={active}
              className={`shrink-0 rounded-full border-2 px-4 py-2 text-[15px] font-bold transition-colors ${
                active
                  ? "border-navy bg-navy text-white"
                  : "border-navy/15 bg-white text-navy hover:border-navy"
              }`}
            >
              {f.label}
              <span className={`ml-2 text-sm ${active ? "text-yellow" : "text-navy/50"}`}>{f.n}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <li key={p.slug} className={filter === "All" && i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}>
            <Link href={`/our-work/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-md bg-paper">
              <div
                className={`relative overflow-hidden ${
                  filter === "All" && i === 0 ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  preload={i === 0}
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes={filter === "All" && i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${p.imagePosition ?? ""}`}
                />
                <span className="absolute left-3 top-3 rounded bg-white/95 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wide text-navy">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-extrabold">{p.client}</h2>
                <p className="mt-1 text-[15px] font-semibold text-navy/60">
                  {p.made} · {p.town}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
