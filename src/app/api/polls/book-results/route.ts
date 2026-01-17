import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('book_votes')
      .select('book_id');

    if (error) {
      console.error('Error fetching book votes:', error);
      return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 });
    }

    const voteCounts = data.reduce((acc: Record<string, number>, vote) => {
      acc[vote.book_id] = (acc[vote.book_id] || 0) + 1;
      return acc;
    }, {});

    const results = Object.entries(voteCounts)
      .map(([bookId, count]) => ({ id: bookId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error in book-results route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}