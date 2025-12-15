import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('character_votes')
      .select('character_id');

    if (error) {
      console.error('Error fetching character votes:', error);
      return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 });
    }

    const voteCounts = data.reduce((acc: Record<string, number>, vote) => {
      acc[vote.character_id] = (acc[vote.character_id] || 0) + 1;
      return acc;
    }, {});

    const results = Object.entries(voteCounts)
      .map(([characterId, count]) => ({ id: characterId, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error in character-results route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}