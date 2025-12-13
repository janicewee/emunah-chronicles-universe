import { notFound } from "next/navigation";
import Link from "next/link";
import { getBookById, getBooksByReadingOrder } from "@/lib/books";
import { 
  BookOpen, 
  ArrowLeft, 
  ArrowRight,
  ExternalLink,
  Play,
  Library,
  Users
} from "lucide-react";

export async function generateStaticParams() {
  const books = getBooksByReadingOrder();
  return books.map((book) => ({ id: book.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = getBookById(id);
  if (!book) return { title: "Book Not Found" };
  return {
    title: `${book.title} | Emunah Chronicles Universe`,
    description: book.synopsis.slice(0, 160),
  };
}

const storeIcons: Record<string, string> = {
  amazon: "Amazon",
  barnesNoble: "Barnes & Noble",
  kobo: "Kobo",
  hoopla: "Hoopla",
  fable: "Fable",
  everand: "Everand",
  books2read: "Universal Link",
  freePdf: "Free PDF",
};

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = getBookById(id);
  const books = getBooksByReadingOrder();

  if (!book) {
    notFound();
  }

  const currentIndex = books.findIndex((b) => b.id === book.id);
  const prevBook = currentIndex > 0 ? books[currentIndex - 1] : null;
  const nextBook = currentIndex < books.length - 1 ? books[currentIndex + 1] : null;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors font-crimson mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Books
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mystic-glow mb-6">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-gold text-[#0a0a0f] w-10 h-10 rounded-full flex items-center justify-center font-cinzel font-bold">
                  {book.readingOrder}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-cinzel text-lg font-semibold text-gold mb-3">
                  Get This Book
                </h3>
                {Object.entries(book.links).map(([key, url]) => (
                  url && (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-card border border-gold/10 rounded-lg px-4 py-3 hover:border-gold/30 transition-colors group"
                    >
                      <span className="font-crimson text-[#e8e4dc] group-hover:text-gold transition-colors">
                        {storeIcons[key] || key}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="font-crimson text-gold uppercase tracking-wider text-sm mb-2">
                Book {book.readingOrder} in the Series
              </p>
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#e8e4dc] mb-2">
                {book.title}
              </h1>
              <p className="font-crimson text-lg text-muted-foreground">
                by {book.author}
              </p>
            </div>

            <div>
              <h2 className="font-cinzel text-xl font-semibold text-gold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Synopsis
              </h2>
              <p className="font-crimson text-lg text-muted-foreground leading-relaxed">
                {book.synopsis}
              </p>
            </div>

            <div className="bg-card border border-gold/10 rounded-lg p-6">
              <h2 className="font-cinzel text-xl font-semibold text-gold mb-4">
                Excerpt
              </h2>
              <blockquote className="font-crimson text-lg text-muted-foreground leading-relaxed italic border-l-4 border-gold/30 pl-4 whitespace-pre-line">
                {book.excerpt}
              </blockquote>
            </div>

            {book.videos.length > 0 && (
              <div>
                <h2 className="font-cinzel text-xl font-semibold text-gold mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Videos
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {book.videos.map((video) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card border border-gold/10 rounded-lg overflow-hidden hover:border-gold/30 transition-colors group"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-cinzel text-sm font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors line-clamp-1">
                          {video.title}
                        </h3>
                        <p className="font-crimson text-xs text-muted-foreground line-clamp-2 mt-1">
                          {video.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-accent/10 via-gold/5 to-accent/10 rounded-lg p-6 space-y-4">
              <h2 className="font-cinzel text-xl font-semibold text-[#e8e4dc] mb-4">
                Join the Discussion
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {book.links.fable && (
                  <a
                    href={book.links.fable}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-card border border-gold/10 rounded-lg px-4 py-3 hover:border-gold/30 transition-colors group"
                  >
                    <Users className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-cinzel text-sm font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors">
                        Start a Book Club
                      </p>
                      <p className="font-crimson text-xs text-muted-foreground">
                        on Fable
                      </p>
                    </div>
                  </a>
                )}
                
                <div className="flex items-center gap-3 bg-card border border-gold/10 rounded-lg px-4 py-3">
                  <Library className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-cinzel text-sm font-semibold text-[#e8e4dc]">
                      Recommend to Library
                    </p>
                    <p className="font-crimson text-xs text-muted-foreground">
                      Available via Ingram & Overdrive
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-gold/10">
              {prevBook ? (
                <Link
                  href={`/books/${prevBook.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <div className="text-left">
                    <p className="font-crimson text-xs uppercase tracking-wider">Previous</p>
                    <p className="font-cinzel text-sm line-clamp-1">{prevBook.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {nextBook ? (
                <Link
                  href={`/books/${nextBook.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                >
                  <div className="text-right">
                    <p className="font-crimson text-xs uppercase tracking-wider">Next</p>
                    <p className="font-cinzel text-sm line-clamp-1">{nextBook.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}