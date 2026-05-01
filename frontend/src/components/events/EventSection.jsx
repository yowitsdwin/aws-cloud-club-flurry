import EventCard from "./EventCard";

export default function EventSection({ title, events = [] }) {
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
            </div>

            {events.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-14 rounded-2xl border border-dashed border-gray-200 text-center">
                    <span className="text-3xl mb-3">📭</span>
                    <p className="text-gray-400 text-sm">No events found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
        </section>
    );
}