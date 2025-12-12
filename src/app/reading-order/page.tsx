import Image from "next/image";
import Link from "next/link";
import { getBooksByReadingOrder } from "@/lib/books";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Reading Order | Emunah Chronicles Universe",
  description: "Discover the recommended reading order for the Emunah Chronicles Universe series by Janice Wee.",
};

export default function ReadingOrderPage() {
  const books = getBooksByReadingOrder();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold gold-gradient mb-4">
            Reading Order
          </h1>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow this recommended order to experience the Emunah Chronicles Universe 
            as intended by author Janice Wee.
          </p>
        </div>

        <div className="space-y-4">
          {books.map((book, index) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="group block"
            >
              <div className="flex items-center gap-4 bg-card border border-gold/10 rounded-lg p-4 hover:border-gold/30 transition-all hover:bg-card/80">
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-[#0a0a0f] rounded-full flex items-center justify-center font-cinzel font-bold text-lg">
                  {book.readingOrder}
                </div>
                
                <div className="flex-shrink-0 relative w-16 h-24 rounded overflow-hidden">
                  <Image
                    src={book.coverUrl}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                
                <div className="flex-grow min-w-0">
                  <h3 className="font-cinzel text-lg font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="font-crimson text-sm text-muted-foreground line-clamp-2">
                    {book.synopsis.slice(0, 100)}...
                  </p>
                </div>
                
                <ArrowRight className="flex-shrink-0 w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
              
              {index < books.length - 1 && (
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-6 bg-gold/20" />
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-card border border-gold/10 rounded-lg p-8">
          <h2 className="font-cinzel text-2xl font-bold text-gold mb-4 text-center">
            Reading Tips
          </h2>
          <div className="font-crimson text-lg text-muted-foreground space-y-4">
            <p>
              <strong className="text-[#e8e4dc]">Start with Book 1:</strong> &quot;Disturbing Dreams&quot; 
              introduces the main characters and sets up the corporate conspiracy that drives the series.
            </p>
            <p>
              <strong className="text-[#e8e4dc]">Short Stories:</strong> The &quot;Emunah Short Stories&quot; 
              expand on individual characters and fill in important backstory. They can be read in order 
              or as companions to the main novels.
            </p>
            <p>
              <strong className="text-[#e8e4dc]">Billy Lionheart Series:</strong> Books 11-14 follow Billy&apos;s 
              adventures in the Millennial Kingdom. These are lighter in tone but connect to the larger narrative.
            </p>
            <p>
              <strong className="text-[#e8e4dc]">The Quest for Immortality:</strong> This comprehensive novel 
              can serve as either an entry point or a culminating read that ties everything together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
