"use client";

import { useState } from "react";
import { getBooksByReadingOrder } from "@/lib/books";

interface Video {
  id: string;
  title: string;
  description: string;
  bookTitle: string;
}

function getAllVideos(): Video[] {
  const books = getBooksByReadingOrder();
  const videos: Video[] = [];
  for (const book of books) {
    for (const video of book.videos) {
      videos.push({ ...video, bookTitle: book.title });
    }
  }
  return videos;
}

export function VideoPlaylist() {
  const videos = getAllVideos();
  const [activeId, setActiveId] = useState(videos[videos.length - 1]?.id ?? "");

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main player */}
      <div className="flex-1 min-w-0">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10">
          <iframe
            key={activeId}
            src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {/* Active video title */}
        <p className="font-cinzel text-[#e8e4dc] mt-3 text-sm">
          {videos.find((v) => v.id === activeId)?.title}
        </p>
        <p className="font-crimson text-muted-foreground text-sm">
          {videos.find((v) => v.id === activeId)?.bookTitle}
        </p>
      </div>

      {/* Video list */}
      <div className="lg:w-72 xl:w-80 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-1">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveId(video.id)}
            className={`flex gap-3 items-start text-left rounded-lg p-2 transition-all hover:bg-gold/10 ${
              activeId === video.id ? "bg-gold/20 border border-gold/30" : "border border-transparent"
            }`}
          >
            <div className="relative flex-shrink-0 w-28 aspect-video rounded overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {activeId === video.id && (
                <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gold/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-[#0a0a0f] ml-0.5" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-cinzel text-xs text-[#e8e4dc] leading-snug line-clamp-2">
                {video.title}
              </p>
              <p className="font-crimson text-xs text-gold/70 mt-1 truncate">
                {video.bookTitle}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
