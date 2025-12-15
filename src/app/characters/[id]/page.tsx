import { getCharacterById } from "@/lib/characters";
import { getBookIdByTitle } from "@/lib/books";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, MessageCircle } from "lucide-react";

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

  const { data: comments } = await supabase
    .from('character_votes')
    .select('comment, created_at')
    .eq('character_id', id)
    .not('comment', 'is', null)
    .order('created_at', { ascending: false });

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
                className="object-contain"
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

            {comments && comments.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gold/10">
                <h2 className="font-cinzel text-xl font-semibold text-[#e8e4dc] mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-gold" />
                  Reader Comments
                </h2>
                <div className="space-y-4">
                  {comments.map((comment, idx) => (
                    <div key={idx} className="bg-[#0d0d14]/50 border border-gold/5 rounded-lg p-4">
                      <p className="font-crimson text-muted-foreground leading-relaxed">
                        {comment.comment}
                      </p>
                      <p className="font-crimson text-xs text-muted-foreground/60 mt-2">
                        {new Date(comment.created_at).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}