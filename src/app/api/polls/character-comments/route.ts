import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const characterId = searchParams.get('characterId');

    if (!characterId) {
      return NextResponse.json({ error: 'Character ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('character_votes')
      .select('comment, created_at')
      .eq('character_id', characterId)
      .not('comment', 'is', null)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching character comments:', error);
      return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error in character-comments route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
