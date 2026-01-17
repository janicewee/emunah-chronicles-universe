import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { getBooksByReadingOrder } from "@/lib/books";
import { characters } from "@/lib/characters";
import { ArrowRight, BookOpen, Users, Library, Download, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const books = getBooksByReadingOrder();
  const featuredBooks = books.slice(0, 4);
  
  // Featured characters: Emunah, Jayden, Leo, Jake, Evelyn
  const featuredCharacterIds = ["emunah", "jayden", "leo", "jake", "evelyn"];
  const featuredCharacters = characters.filter(c => featuredCharacterIds.includes(c.id));

  return (
    <div className="min-h-screen">
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-900/30 via-purple-900/20 to-rose-900/30 border-b border-rose-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cinzel text-lg sm:text-xl text-[#e8e4dc] mb-3">
            Want <span className="text-rose-400 font-bold">FULL</span> disclosure? Read <span className="text-gold font-semibold">Disturbing Dreams</span>.
          </p>
          <a
            href="https://www.janicewee.com/books/disturbing-dreams-free-ebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-lg font-cinzel font-semibold hover:bg-rose-500 transition-all hover:scale-105 shadow-lg shadow-rose-900/30"
          >
            <Download className="w-5 h-5" />
            Download the Free PDF Ebook
          </a>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-900/20 via-[#0a0a0f] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold font-cinzel text-sm rounded-full mb-4">
              Free Download
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#e8e4dc] mb-2">
              The Quest for Immortality
            </h2>
            <p className="font-crimson text-lg text-gold">Emunah Chronicles #3</p>
          </div>
          
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative mx-auto">
                <Link href="/books/the-quest-for-immortality">
                  <div className="relative w-64 sm:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-amber-900/30 border border-gold/20 hover:border-gold/40 transition-colors">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/81268eda-35d8-4cc1-9a2d-ad62e11509a4/book3k-resized-1768351933016.jpg?width=8000&height=8000&resize=contain"
                      alt="The Quest for Immortality Book Cover"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </Link>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl" />
            </div>
            
            <div className="space-y-6">
              <div className="bg-card/50 border border-gold/20 rounded-lg p-6">
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="font-cinzel text-gold text-xs tracking-wider uppercase">Goodreads Review</span>
                </div>
                <blockquote className="font-crimson text-muted-foreground italic leading-relaxed">
                  &ldquo;The book discusses disturbing applications of modern technology with Bible Prophecy. It is character-driven, seen through the eyes of the diverse cast as the transition from today&apos;s setting into a world ruled by a global dictator, the Antichrist... The book is fast-paced; the twists and turns that keep you turning the pages. It&apos;s an epic speculative science fiction novel that draws on prophetic events. I find the book highly entertaining, and I recommend it.&rdquo;
                </blockquote>
                <p className="font-crimson text-gold mt-3 text-sm">— Miranda Yeo</p>
              </div>
              
              <a
                href="https://www.janicewee.com/books/the-quest-for-immortality-full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-[#0a0a0f] px-8 py-4 rounded-lg font-cinzel font-semibold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg shadow-gold/20"
              >
                <Download className="w-6 h-6" />
                Download Free PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0f] via-emerald-900/10 to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 font-cinzel text-sm rounded-full mb-4">
              Universe Finale
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#e8e4dc] mb-2">
              Dragon Unbound
            </h2>
            <p className="font-crimson text-lg text-emerald-400">Emunah Chronicles</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative mx-auto order-2 md:order-1">
              <div className="space-y-6">
                <div className="bg-card/50 border border-emerald-500/20 rounded-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex gap-0.5 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                      ))}
                    </div>
                    <span className="font-cinzel text-emerald-400 text-xs tracking-wider uppercase">Goodreads Review</span>
                  </div>
                  <blockquote className="font-crimson text-muted-foreground italic leading-relaxed">
                    &ldquo;A must-read for fans of Christian speculative fiction... The story spans a thousand years, centering on the captivating journey of Billy Lionheart and Bluma, from childhood friends to patriarch and matriarch of a new nation. If you&apos;re looking for an allegorical story that blends action, family drama, and profound spiritual themes, Dragon Unbound will not disappoint.&rdquo;
                  </blockquote>
                  <p className="font-crimson text-emerald-400 mt-3 text-sm">— Ting Chin</p>
                </div>
                
                <Link
                  href="/books/dragon-unbound"
                  className="inline-flex items-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-lg font-cinzel font-semibold hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-emerald-900/30"
                >
                  <BookOpen className="w-6 h-6" />
                  Read More
                </Link>
              </div>
            </div>
            
            <div className="relative mx-auto order-1 md:order-2">
              <Link href="/books/dragon-unbound">
                <div className="relative w-64 sm:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-emerald-900/30 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/81268eda-35d8-4cc1-9a2d-ad62e11509a4/dragonunbound-1768352449933.jpg?width=8000&height=8000&resize=contain"
                    alt="Dragon Unbound Book Cover"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </Link>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

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
              <Image
                src={books[0].coverUrl}
                alt="Featured Book"
                fill
                className="object-cover"
                unoptimized
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#e8e4dc]">
              Meet the Characters
            </h2>
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-crimson"
            >
              All Characters
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {featuredCharacters.map((character) => (
              <Link
                key={character.id}
                href={`/characters/${character.id}`}
                className="group bg-card border border-gold/10 rounded-lg p-4 text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-colors">
                  {character.image ? (
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gold/5 flex items-center justify-center">
                      <Users className="w-8 h-8 text-gold/30" />
                    </div>
                  )}
                </div>
                <h3 className="font-cinzel font-semibold text-[#e8e4dc] group-hover:text-gold transition-colors">
                  {character.name}
                </h3>
              </Link>
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
