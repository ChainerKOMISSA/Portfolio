"use client";
import { useEffect, useState } from "react";

export function LikeDislikeButtons() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/likes")
            .then(res => res.json())
            .then(data => {
                setLikes(data.likes);
                setDislikes(data.dislikes);
                setLoading(false);
            });
    }, []);

    const vote = async (type: "like" | "dislike") => {
        const res = await fetch("/api/likes", {
            method: "POST",
            body: JSON.stringify({ type }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setLikes(data.likes);
        setDislikes(data.dislikes);
    };

    return (
        <div className="flex items-center gap-4 mt-6">
            <button
                onClick={() => vote("like")}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-500 transition"
            >
                👍 J&apos;aime ({loading ? "..." : likes})
            </button>
            <button
                onClick={() => vote("dislike")}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-500 transition"
            >
                👎 Pas fan ({loading ? "..." : dislikes})
            </button>
        </div>
    );
}
