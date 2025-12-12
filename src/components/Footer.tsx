import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0d0d14] border-t border-gold/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cinzel text-xl font-bold gold-gradient mb-4">
              Emunah Chronicles
            </h3>
            <p className="text-muted-foreground font-crimson leading-relaxed">
              A speculative science fiction fantasy series set in the end times.
              Of disturbing technology, prophetic dreams, and two possible futures.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-crimson">
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-gold transition-colors">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/reading-order" className="text-muted-foreground hover:text-gold transition-colors">
                  Reading Order
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-muted-foreground hover:text-gold transition-colors">
                  Characters
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-gold mb-4">
              Author
            </h4>
            <p className="text-muted-foreground font-crimson">
              Written by <span className="text-[#e8e4dc]">Janice Wee</span>
            </p>
            <p className="text-muted-foreground font-crimson mt-2">
              Available on Amazon, Barnes & Noble, Kobo, and more.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gold/10 text-center">
          <p className="text-muted-foreground font-crimson text-sm">
            &copy; {new Date().getFullYear()} Emunah Chronicles Universe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
