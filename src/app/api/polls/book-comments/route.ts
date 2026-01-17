import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const bookId = searchParams.get('bookId');

    if (!bookId) {
      return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('book_votes')
      .select('comment, created_at')
      .eq('book_id', bookId)
      .not('comment', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching book comments:', error);
      return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error in book-comments route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
