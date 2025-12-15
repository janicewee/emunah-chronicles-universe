import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

function sanitizeComment(comment: string | undefined): string | null {
  if (!comment || !comment.trim()) return null;
  
  let sanitized = comment.trim();
  
  sanitized = sanitized.replace(/https?:\/\/[^\s]+/gi, '');
  sanitized = sanitized.replace(/www\.[^\s]+/gi, '');
  sanitized = sanitized.replace(/[a-zA-Z0-9-]+\.(com|net|org|io|dev|co|uk|us)[^\s]*/gi, '');
  sanitized = sanitized.replace(/\[.*?\]\(.*?\)/g, '');
  sanitized = sanitized.replace(/<a\s+[^>]*>.*?<\/a>/gi, '');
  
  sanitized = sanitized.replace(/\s+/g, ' ').trim();
  
  if (sanitized.length === 0) return null;
  if (sanitized.length > 500) sanitized = sanitized.substring(0, 500);
  
  return sanitized;
}

export async function POST(request: NextRequest) {
  try {
    const { bookId, comment } = await request.json();

    if (!bookId) {
      return NextResponse.json({ error: 'Book ID is required' }, { status: 400 });
    }

    const sanitizedComment = sanitizeComment(comment);

    const { error } = await supabase
      .from('book_votes')
      .insert([{ book_id: bookId, comment: sanitizedComment }]);

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