import { useState, useEffect } from "react";

export function useCountdown(targetDate) {
    const calc = () => {
        const diff = new Date(targetDate).getTime() - Date.now();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            expired: false,
        };
    };

    const [state, setState] = useState(calc);

    useEffect(() => {
        const id = setInterval(() => {
            const next = calc();
            setState(next);
            if (next.expired) clearInterval(id);
        }, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return state;
}