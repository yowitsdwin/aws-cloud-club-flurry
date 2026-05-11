import { useState } from "react";
import { Inbox, ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard";

export default function EventSection({ title, events = [] }) {
    const [page, setPage] = useState(0);
    const CARDS_PER_PAGE = 3;

    const totalPages = Math.ceil(events.length / CARDS_PER_PAGE);
    const paginated = events.slice(
        page * CARDS_PER_PAGE,
        page * CARDS_PER_PAGE + CARDS_PER_PAGE
    );

    return (
        <section>
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    {title}
                </h2>

                <div className="h-px flex-1 bg-gray-200/70" />

                <span className="text-xs font-semibold text-gray-400 tabular-nums">
                    {events.length} {events.length === 1 ? "event" : "events"}
                </span>

                {totalPages > 1 && (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={page === 0}
                            className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-30"
                        >
                            <ChevronLeft size={14} />
                        </button>

                        <span className="text-xs text-gray-400 px-1">
                            {page + 1} / {totalPages}
                        </span>

                        <button
                            onClick={() =>
                                setPage((p) => Math.min(totalPages - 1, p + 1))
                            }
                            disabled={page === totalPages - 1}
                            className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 disabled:opacity-30"
                        >
                            <ChevronRight size={14} />
                        </button>
                    </div>
                )}
            </div>

            {events.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-14 rounded-2xl border border-dashed border-gray-200 text-center">
                    <Inbox size={32} className="text-gray-300 mb-3" />
                    <p className="text-gray-400 text-sm">
                        No events found in this category.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginated.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
        </section>
    );
}