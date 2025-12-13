import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { getBooksByReadingOrder } from "@/lib/books";
import { ArrowRight, BookOpen, Users, Library } from "lucide-react";

export default function Home() {
  const books = getBooksByReadingOrder();
  const featuredBooks = books.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gold-gradient">Emunah Chronicles</span>
            <br />
            <span className="text-[#e8e4dc]">Universe</span>
          </h1>
          
          <p className="font-crimson text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            A speculative science fiction fantasy series set in the end times. 
            Of disturbing technology, prophetic dreams, and two possible futures.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 bg-gold text-[#0a0a0f] px-6 py-3 rounded-lg font-cinzel font-semibold hover:bg-gold/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Explore Books
            </Link>
            <Link
              href="/reading-order"
              className="inline-flex items-center gap-2 border border-gold/30 text-[#e8e4dc] px-6 py-3 rounded-lg font-cinzel font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              <Library className="w-5 h-5" />
              Reading Order
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cinzel text-3xl font-bold text-gold mb-6">
                Enter a World of Faith and Mystery
              </h2>
              <div className="font-crimson text-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Emunah and her friends uncover a corporate conspiracy revolving around Beast Corp. 
                  Investigations expose them to the occult and to murder attempts by those who want them silenced.
                </p>
                <p>
                  A group of born again Christians warn their friends about end times bible prophecies, 
                  and the upcoming Rapture of the Church. These are brushed aside as loonies...
                </p>
                <p>
                  During one of Jayden&apos;s wild parties, the Rapture of the Church happens, 
                  shaking those in the group who are left behind.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mystic-glow">
              <img
                src={books[0].coverUrl}
                alt="Featured Book"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#e8e4dc]">
              Featured Books
            </h2>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-crimson"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} showOrder />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#e8e4dc] mb-8 text-center">
            Explore the Universe
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/books" className="group">
              <div className="card-hover bg-card border border-gold/10 rounded-lg p-6 text-center h-full">
                <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-xl font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors mb-2">
                  15 Books
                </h3>
                <p className="font-crimson text-muted-foreground">
                  Dive into the complete series spanning multiple story arcs and timelines
                </p>
              </div>
            </Link>
            
            <Link href="/characters" className="group">
              <div className="card-hover bg-card border border-gold/10 rounded-lg p-6 text-center h-full">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-xl font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors mb-2">
                  100+ Characters
                </h3>
                <p className="font-crimson text-muted-foreground">
                  Meet the heroes, villains, and everyone in between
                </p>
              </div>
            </Link>
            
            <Link href="/reading-order" className="group">
              <div className="card-hover bg-card border border-gold/10 rounded-lg p-6 text-center h-full">
                <Library className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-xl font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors mb-2">
                  Reading Order
                </h3>
                <p className="font-crimson text-muted-foreground">
                  Follow the recommended reading order for the best experience
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-gold/5 to-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#e8e4dc] mb-6">
            Join the Community
          </h2>
          <p className="font-crimson text-lg text-muted-foreground mb-8">
            Start a book club, discuss theories, and connect with other readers. 
            Share your love for the Emunah Chronicles with your local library.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://fable.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-gold/30 text-[#e8e4dc] px-6 py-3 rounded-lg font-crimson hover:border-gold hover:text-gold transition-colors"
            >
              Start a Book Club on Fable
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}