import { getCharacterById } from "@/lib/characters";
import { getBookIdByTitle } from "@/lib/books";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CharacterPageProps) {
  const { id } = await params;
  const character = getCharacterById(id);
  
  if (!character) {
    return {
      title: "Character Not Found",
    };
  }

  return {
    title: `${character.name} | Emunah Chronicles`,
    description: character.description,
  };
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const character = getCharacterById(id);

  if (!character) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8 font-crimson"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Characters
        </Link>

        <div className="bg-card border border-gold/10 rounded-lg overflow-hidden">
          {character.image && (
            <div className="relative w-full aspect-video md:aspect-[21/9]">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-8">
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-gold mb-4">
              {character.name}
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="font-crimson text-lg text-muted-foreground leading-relaxed">
                {character.description}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gold/10">
              <h2 className="font-cinzel text-xl font-semibold text-[#e8e4dc] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                Appears In
              </h2>
              <div className="flex flex-wrap gap-3">
                {character.appearances.map((book) => {
                  const bookId = getBookIdByTitle(book);
                  return bookId ? (
                    <Link
                      key={book}
                      href={`/books/${bookId}`}
                      className="bg-gold/10 text-gold px-4 py-2 rounded-lg font-crimson hover:bg-gold/20 transition-colors"
                    >
                      {book}
                    </Link>
                  ) : (
                    <span
                      key={book}
                      className="bg-gold/10 text-gold px-4 py-2 rounded-lg font-crimson"
                    >
                      {book}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
