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
    const { characterId, comment } = await request.json();

    if (!characterId) {
      return NextResponse.json({ error: 'Character ID is required' }, { status: 400 });
    }

    const sanitizedComment = sanitizeComment(comment);

    const { error } = await supabase
      .from('character_votes')
      .insert([{ character_id: characterId, comment: sanitizedComment }]);

    if (error) {
      console.error('Error voting for character:', error);
      return NextResponse.json({ error: 'Failed to record vote' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in vote-character route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}