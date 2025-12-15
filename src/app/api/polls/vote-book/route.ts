import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { bookId } = await request.json();

    if (!bookId) {
      return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('book_votes')
      .insert([{ book_id: bookId }]);

    if (error) {
      console.error('Error voting for book:', error);
      return NextResponse.json({ error: 'Failed to record vote' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in vote-book route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
