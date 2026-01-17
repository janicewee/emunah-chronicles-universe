"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { characters, getCharactersByLetter, searchCharacters } from "@/lib/characters";
import { books } from "@/lib/books";
import { Search, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

function getBookIdByTitle(title: string): string | null {
  const book = books.find(
    (b) => b.title === title || b.title.toLowerCase() === title.toLowerCase()
  );
  return book ? book.id : null;
}

export default function CharactersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCharacter, setExpandedCharacter] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const groupedCharacters = useMemo(() => getCharactersByLetter(), []);
  const letters = Object.keys(groupedCharacters).sort();

  const filteredCharacters = useMemo(() => {
    if (searchQuery) {
      return searchCharacters(searchQuery);
    }
    if (selectedLetter) {
      return groupedCharacters[selectedLetter] || [];
    }
    return characters;
  }, [searchQuery, selectedLetter, groupedCharacters]);

  const displayGrouped = !searchQuery && !selectedLetter;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold gold-gradient mb-4">
            Characters
          </h1>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the heroes, villains, and everyone in between. 
            Over 100 characters populate the Emunah Chronicles Universe.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search characters by name or description..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedLetter(null);
              }}
              className="w-full bg-card border border-gold/10 rounded-lg pl-12 pr-4 py-3 font-crimson text-[#e8e4dc] placeholder:text-muted-foreground focus:outline-none focus:border-gold/30"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => {
                setSelectedLetter(null);
                setSearchQuery("");
              }}
              className={`px-3 py-1.5 rounded font-cinzel text-sm transition-colors ${
                !selectedLetter && !searchQuery
                  ? "bg-gold text-[#0a0a0f]"
                  : "bg-card border border-gold/10 text-muted-foreground hover:border-gold/30 hover:text-[#e8e4dc]"
              }`}
            >
              All
            </button>
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  setSelectedLetter(letter);
                  setSearchQuery("");
                }}
                className={`w-9 h-9 rounded font-cinzel text-sm transition-colors ${
                  selectedLetter === letter
                    ? "bg-gold text-[#0a0a0f]"
                    : "bg-card border border-gold/10 text-muted-foreground hover:border-gold/30 hover:text-[#e8e4dc]"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        <p className="font-crimson text-muted-foreground mb-6 text-center">
          Showing {filteredCharacters.length} character{filteredCharacters.length !== 1 ? "s" : ""}
        </p>

        {displayGrouped ? (
          <div className="space-y-8">
            {letters.map((letter) => (
              <div key={letter}>
                <h2 className="font-cinzel text-2xl font-bold text-gold mb-4 border-b border-gold/20 pb-2">
                  {letter}
                </h2>
                <div className="grid gap-3">
                  {groupedCharacters[letter].map((character) => (
                    <CharacterCard
                      key={character.id}
                      character={character}
                      isExpanded={expandedCharacter === character.id}
                      onToggle={() =>
                        setExpandedCharacter(
                          expandedCharacter === character.id ? null : character.id
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isExpanded={expandedCharacter === character.id}
                onToggle={() =>
                  setExpandedCharacter(
                    expandedCharacter === character.id ? null : character.id
                  )
                }
              />
            ))}
            {filteredCharacters.length === 0 && (
              <p className="font-crimson text-muted-foreground text-center py-8">
                No characters found matching your search.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface CharacterCardProps {
  character: {
    id: string;
    name: string;
    description: string;
    appearances: string[];
    image?: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
}

function CharacterCard({ character, isExpanded, onToggle }: CharacterCardProps) {
  return (
    <div className="bg-card border border-gold/10 rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <div className="flex items-center gap-4 flex-grow">
          {character.image && (
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                  unoptimized
                />
              </div>
          )}
          <div className="flex-grow">
            <Link
              href={`/characters/${character.id}`}
              className="font-cinzel text-lg font-semibold text-[#e8e4dc] hover:text-gold transition-colors"
            >
              {character.name}
            </Link>
            {!isExpanded && (
              <p className="font-crimson text-sm text-muted-foreground line-clamp-1 mt-1">
                {character.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={onToggle}
          className="flex-shrink-0 ml-4 p-2 hover:bg-card/80 transition-colors rounded"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gold" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gold/10 pt-4">
          <p className="font-crimson text-muted-foreground leading-relaxed mb-4">
            {character.description}
          </p>
          <div>
            <h4 className="font-cinzel text-sm font-semibold text-gold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Appears In
            </h4>
            <div className="flex flex-wrap gap-2">
              {character.appearances.map((book) => {
                const bookId = getBookIdByTitle(book);
                return bookId ? (
                  <Link
                    key={book}
                    href={`/books/${bookId}`}
                    className="bg-gold/10 text-gold px-3 py-1 rounded-full font-crimson text-sm hover:bg-gold/20 transition-colors"
                  >
                    {book}
                  </Link>
                ) : (
                  <span
                    key={book}
                    className="bg-gold/10 text-gold px-3 py-1 rounded-full font-crimson text-sm"
                  >
                    {book}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}