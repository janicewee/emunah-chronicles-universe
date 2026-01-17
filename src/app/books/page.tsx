import { BookCard } from "@/components/BookCard";
import { getBooksByReadingOrder } from "@/lib/books";

export const metadata = {
  title: "All Books | Emunah Chronicles Universe",
  description: "Browse all 15 books in the Emunah Chronicles Universe series by Janice Wee.",
};

export default function BooksPage() {
  const books = getBooksByReadingOrder();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold gold-gradient mb-4">
            The Books
          </h1>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all 15 books in the Emunah Chronicles Universe. 
            Each story weaves together to create an epic tapestry of faith, technology, and prophecy.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} showOrder />
          ))}
        </div>

        <div className="mt-16 bg-card border border-gold/10 rounded-lg p-8 text-center">
          <h2 className="font-cinzel text-2xl font-bold text-gold mb-4">
            Support Your Local Library
          </h2>
          <p className="font-crimson text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Love the Emunah Chronicles? Ask your local library to add these books to their collection. 
            Libraries often honor patron requests and it helps spread the story to more readers.
          </p>
          <p className="font-crimson text-muted-foreground">
            All books are available through Ingram, Baker & Taylor, Overdrive, and Gardners for library ordering.
          </p>
        </div>
      </div>
    </div>
  );
}
