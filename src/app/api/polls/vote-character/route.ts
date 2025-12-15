import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { characterId } = await request.json();

    if (!characterId) {
      return NextResponse.json({ error: 'Character ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('character_votes')
      .insert([{ character_id: characterId }]);

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
