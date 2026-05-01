import { useState, useMemo } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxClouds from "../components/ParallaxClouds";
import CloudReveal from "../components/CloudReveal";

import EventHero from "../components/events/EventHero";
import EventStats from "../components/events/EventStats";
import EventFilters from "../components/events/EventFilters";
import EventSection from "../components/events/EventSection";
import EventAnnouncementsBanner from "../components/events/EventAnnouncementsBanner";

import { ALL_EVENTS, CATEGORIES } from "../data/eventsData";

export default function Events() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");

    const filteredEvents = useMemo(() => {
        let events = ALL_EVENTS.filter((event) => {
            const matchCategory =
                activeCategory === "All" || event.category === activeCategory;

            const matchSearch =
                event.title.toLowerCase().includes(search.toLowerCase()) ||
                event.description.toLowerCase().includes(search.toLowerCase());

            return matchCategory && matchSearch;
        });

        return events.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sort === "newest" ? dateB - dateA : dateA - dateB;
        });
    }, [activeCategory, search, sort]);

    const upcomingEvents = filteredEvents.filter((e) => e.upcoming);
    const recentEvents = filteredEvents.filter((e) => !e.upcoming);

    return (
        <div className="min-h-screen font-['League_Spartan','Inter',sans-serif] text-[#0d2845] relative">

            <ParallaxClouds />

            <Navbar />

            <EventAnnouncementsBanner events={ALL_EVENTS} />

            <main className="relative z-[1]">

                <CloudReveal>
                    <EventHero />
                </CloudReveal>

                <CloudReveal>
                    <EventStats events={ALL_EVENTS} />
                </CloudReveal>

                <CloudReveal>
                    <EventFilters
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        search={search}
                        setSearch={setSearch}
                        sort={sort}
                        setSort={setSort}
                    />
                </CloudReveal>

                <CloudReveal>
                    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
                        <EventSection title="Upcoming Events" events={upcomingEvents} />
                        <EventSection title="Recent Events" events={recentEvents} />
                    </div>
                </CloudReveal>

            </main>

            <Footer />

        </div>
    );
}