import EventCard from "./EventCard";

export default function RecentEvents({ events = [] }) {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">

            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-300">
                    Recent Events
                </h2>

                <div className="flex-1 h-px bg-white/10" />
            </div>

            {events.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent events yet.</p>
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