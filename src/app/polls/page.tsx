"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trophy, BookOpen, Users } from "lucide-react";
import { books, getBookById } from "@/lib/books";
import { characters, getCharacterById } from "@/lib/characters";

interface LeaderboardItem {
  id: string;
  count: number;
}

export default function PollsPage() {
  const router = useRouter();
  const [selectedBook, setSelectedBook] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");
  const [bookComment, setBookComment] = useState<string>("");
  const [characterComment, setCharacterComment] = useState<string>("");
  const [bookFilter, setBookFilter] = useState<string>("all");
  const [bookLeaderboard, setBookLeaderboard] = useState<LeaderboardItem[]>([]);
  const [characterLeaderboard, setCharacterLeaderboard] = useState<LeaderboardItem[]>([]);
  const [bookVoting, setBookVoting] = useState(false);
  const [characterVoting, setCharacterVoting] = useState(false);

  useEffect(() => {
    fetchLeaderboards();
  }, []);

  async function fetchLeaderboards() {
    try {
      const [bookRes, charRes] = await Promise.all([
        fetch("/api/polls/book-results"),
        fetch("/api/polls/character-results"),
      ]);

      if (bookRes.ok) {
        const bookData = await bookRes.json();
        setBookLeaderboard(bookData);
      }

      if (charRes.ok) {
        const charData = await charRes.json();
        setCharacterLeaderboard(charData);
      }
    } catch (error) {
      console.error("Error fetching leaderboards:", error);
    }
  }

  async function handleBookVote() {
    if (!selectedBook) return;

    setBookVoting(true);
    try {
      const res = await fetch("/api/polls/vote-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId: selectedBook, comment: bookComment }),
      });

      if (res.ok) {
        await fetchLeaderboards();
        const hadComment = bookComment.trim().length > 0;
        setSelectedBook("");
        setBookComment("");
        
        if (hadComment) {
          router.push(`/books/${selectedBook}`);
        }
      }
    } catch (error) {
      console.error("Error voting for book:", error);
    } finally {
      setBookVoting(false);
    }
  }

  async function handleCharacterVote() {
    if (!selectedCharacter) return;

    setCharacterVoting(true);
    try {
      const res = await fetch("/api/polls/vote-character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ characterId: selectedCharacter, comment: characterComment }),
      });

      if (res.ok) {
        await fetchLeaderboards();
        const hadComment = characterComment.trim().length > 0;
        setSelectedCharacter("");
        setCharacterComment("");
        
        if (hadComment) {
          router.push(`/characters/${selectedCharacter}`);
        }
      }
    } catch (error) {
      console.error("Error voting for character:", error);
    } finally {
      setCharacterVoting(false);
    }
  }

  const filteredCharacters = bookFilter === "all"
    ? characters
    : characters.filter((char) => {
        const selectedBook = getBookById(bookFilter);
        if (!selectedBook) return false;
        
        const fullTitle = selectedBook.title;
        const shortTitle = fullTitle.replace("Emunah Short Stories: ", "");
        
        return char.appearances.some((appearance) => 
          appearance === fullTitle || appearance === shortTitle
        );
      });

  useEffect(() => {
    if (selectedCharacter && !filteredCharacters.some(char => char.id === selectedCharacter)) {
      setSelectedCharacter("");
    }
  }, [bookFilter, selectedCharacter, filteredCharacters]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold mb-4 gold-gradient">
            Community Polls
          </h1>
          <p className="font-crimson text-lg text-muted-foreground">
            Vote for your favorite book and character from the Emunah Chronicles Universe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-gold" />
              <h2 className="font-cinzel text-2xl font-bold text-[#e8e4dc]">
                Favorite Book
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-crimson text-sm text-muted-foreground mb-2">
                  Select a book
                </label>
                <select
                  value={selectedBook}
                  onChange={(e) => setSelectedBook(e.target.value)}
                  className="w-full bg-[#0d0d14] border border-gold/20 rounded-lg px-4 py-3 font-crimson text-[#e8e4dc] focus:outline-none focus:border-gold"
                >
                  <option value="">Choose a book...</option>
                  {books.map((book) => (
                    <option key={book.id} value={book.id}>
                      {book.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-crimson text-sm text-muted-foreground mb-2">
                  Comment (optional) - Share what you like about this book
                </label>
                <textarea
                  value={bookComment}
                  onChange={(e) => setBookComment(e.target.value)}
                  placeholder="What do you love about this book?"
                  maxLength={500}
                  rows={3}
                  className="w-full bg-[#0d0d14] border border-gold/20 rounded-lg px-4 py-3 font-crimson text-[#e8e4dc] focus:outline-none focus:border-gold resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {bookComment.length}/500 characters
                </p>
              </div>

              <button
                onClick={handleBookVote}
                disabled={!selectedBook || bookVoting}
                className="w-full bg-gold text-[#0a0a0f] px-6 py-3 rounded-lg font-cinzel font-semibold hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {bookVoting ? "Voting..." : "Vote"}
              </button>
            </div>
          </div>

          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-gold" />
              <h2 className="font-cinzel text-2xl font-bold text-[#e8e4dc]">
                Favorite Character
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-crimson text-sm text-muted-foreground mb-2">
                  Filter by book (optional)
                </label>
                <select
                  value={bookFilter}
                  onChange={(e) => setBookFilter(e.target.value)}
                  className="w-full bg-[#0d0d14] border border-gold/20 rounded-lg px-4 py-3 font-crimson text-[#e8e4dc] focus:outline-none focus:border-gold"
                >
                  <option value="all">All Books</option>
                  {books.map((book) => (
                    <option key={book.id} value={book.id}>
                      {book.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-crimson text-sm text-muted-foreground mb-2">
                  Select a character
                </label>
                <select
                  value={selectedCharacter}
                  onChange={(e) => setSelectedCharacter(e.target.value)}
                  className="w-full bg-[#0d0d14] border border-gold/20 rounded-lg px-4 py-3 font-crimson text-[#e8e4dc] focus:outline-none focus:border-gold"
                >
                  <option value="">Choose a character...</option>
                  {filteredCharacters.map((char) => (
                    <option key={char.id} value={char.id}>
                      {char.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-crimson text-sm text-muted-foreground mb-2">
                  Comment (optional) - Share what you like about this character
                </label>
                <textarea
                  value={characterComment}
                  onChange={(e) => setCharacterComment(e.target.value)}
                  placeholder="What do you love about this character?"
                  maxLength={500}
                  rows={3}
                  className="w-full bg-[#0d0d14] border border-gold/20 rounded-lg px-4 py-3 font-crimson text-[#e8e4dc] focus:outline-none focus:border-gold resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {characterComment.length}/500 characters
                </p>
              </div>

              <button
                onClick={handleCharacterVote}
                disabled={!selectedCharacter || characterVoting}
                className="w-full bg-gold text-[#0a0a0f] px-6 py-3 rounded-lg font-cinzel font-semibold hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {characterVoting ? "Voting..." : "Vote"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-gold" />
              <h2 className="font-cinzel text-2xl font-bold text-[#e8e4dc]">
                Top 10 Books
              </h2>
            </div>

            {bookLeaderboard.length === 0 ? (
              <p className="font-crimson text-muted-foreground text-center py-8">
                No votes yet. Be the first to vote!
              </p>
            ) : (
              <div className="space-y-3">
                {bookLeaderboard.map((item, index) => {
                  const book = getBookById(item.id);
                  if (!book) return null;

                  return (
                    <Link
                      key={item.id}
                      href={`/books/${item.id}`}
                      className="flex items-center gap-4 bg-[#0d0d14]/50 border border-gold/5 rounded-lg p-4 hover:border-gold/20 transition-colors"
                    >
                      <div className={`font-cinzel text-2xl font-bold ${index < 3 ? "text-gold" : "text-muted-foreground"} w-8`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-crimson font-semibold text-[#e8e4dc] hover:text-gold transition-colors">
                          {book.title}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-cinzel text-lg font-bold text-gold">
                          {item.count}
                        </p>
                        <p className="font-crimson text-xs text-muted-foreground">
                          votes
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-gold" />
              <h2 className="font-cinzel text-2xl font-bold text-[#e8e4dc]">
                Top 10 Characters
              </h2>
            </div>

            {characterLeaderboard.length === 0 ? (
              <p className="font-crimson text-muted-foreground text-center py-8">
                No votes yet. Be the first to vote!
              </p>
            ) : (
              <div className="space-y-3">
                {characterLeaderboard.map((item, index) => {
                  const character = getCharacterById(item.id);
                  if (!character) return null;

                  return (
                    <Link
                      key={item.id}
                      href={`/characters/${item.id}`}
                      className="flex items-center gap-4 bg-[#0d0d14]/50 border border-gold/5 rounded-lg p-4 hover:border-gold/20 transition-colors"
                    >
                      <div className={`font-cinzel text-2xl font-bold ${index < 3 ? "text-gold" : "text-muted-foreground"} w-8`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-crimson font-semibold text-[#e8e4dc] hover:text-gold transition-colors">
                          {character.name}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-cinzel text-lg font-bold text-gold">
                          {item.count}
                        </p>
                        <p className="font-crimson text-xs text-muted-foreground">
                          votes
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}