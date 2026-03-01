"use client";

import dynamic from "next/dynamic";

const ScrollyCanvas = dynamic(() => import("./ScrollyCanvas"), {
    ssr: false,
    loading: () => (
        <div
            style={{ height: "500vh", background: "#121212" }}
            className="flex items-start justify-center"
        >
            <div
                className="sticky top-0 w-full h-screen flex items-center justify-center"
                style={{ background: "#121212" }}
            >
                <div className="flex flex-col items-center gap-4">
                    <div
                        className="w-10 h-10 rounded-full animate-spin"
                        style={{ border: "2px solid rgba(124,110,248,0.2)", borderTopColor: "#7C6EF8" }}
                    />
                    <p className="text-xs tracking-widest text-white/25 uppercase">Loading</p>
                </div>
            </div>
        </div>
    ),
});

export default function ScrollyCanvasWrapper() {
    return <ScrollyCanvas />;
}
