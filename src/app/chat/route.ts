import { getRandomProfile } from '@/data/profiles';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const randProfile = getRandomProfile();

  redirect(`/chat/${randProfile}`);
}
