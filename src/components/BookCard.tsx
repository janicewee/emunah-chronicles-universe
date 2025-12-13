import Link from "next/link";
import { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
  showOrder?: boolean;
}

export function BookCard({ book, showOrder = false }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="group">
      <div className="card-hover bg-card border border-gold/10 rounded-lg overflow-hidden">
        <div className="relative aspect-[2/3] overflow-hidden">
          {book.videoCoverUrl ? (
            <video
              src={book.videoCoverUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {showOrder && (
            <div className="absolute top-2 left-2 bg-gold text-[#0a0a0f] w-8 h-8 rounded-full flex items-center justify-center font-cinzel font-bold text-sm">
              {book.readingOrder}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-cinzel text-base font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors line-clamp-2">
            {book.title}
          </h3>
          <p className="text-muted-foreground font-crimson text-sm mt-1">
            by {book.author}
          </p>
        </div>
      </div>
    </Link>
  );
}