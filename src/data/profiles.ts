export interface Profile {
  name: string;
  image: string;
  age: number;
  weight: number;
  bio: string;
  job: string;
  location: string;
}

export const profiles: Profile[] = [
  {
    name: 'Fruitcake',
    image: 'profile_1.jpg',
    age: 9,
    weight: 1220,
    bio: 'I enjoy trotting through the park.',
    job: 'Carriage Driver',
    location: '2 miles away',
  },
  {
    name: 'Ed',
    image: 'profile_6.jpg',
    age: 12,
    weight: 1445,
    bio: 'Looking for a running buddy.',
    job: 'Race Vehicle',
    location: '9 miles away',
  },
  {
    name: 'Harold',
    image: 'profile_0.jpg',
    age: 7,
    weight: 1150,
    bio: 'Artisan oat collector.',
    job: 'Oatisa',
    location: '3 miles away',
  },
  {
    name: 'Whiskers',
    image: 'profile_2.jpg',
    age: 11,
    weight: 1950,
    bio: 'Tired of standing out in a field alone.',
    job: 'Manger Manager',
    location: '12 miles away',
  },
  {
    name: 'Greg',
    image: 'profile_3.jpg',
    age: 13,
    weight: 2025,
    bio: 'Just got out of a messy divorce, not looking for anything serious.',
    job: 'Stableless',
    location: '30 miles away',
  },
  {
    name: 'Cucumber',
    image: 'profile_4.jpg',
    age: 5,
    weight: 980,
    bio: "I don't like cucumbers.",
    job: 'Horse thief',
    location: '7 miles away',
  },
  {
    name: 'Sparkles',
    image: 'profile_5.jpg',
    age: 8,
    weight: 1750,
    bio: 'Just looking for a role in the hay.',
    job: 'Stud',
    location: '11 miles away',
  },
];

export function getRandomProfile(lastProfile?: number) {
  const choices = profiles.filter((_, i) => i !== lastProfile);
  return Math.floor(Math.random() * choices.length);
}

export function getNextProfile(currentProfile: number) {
  return (currentProfile + 1) % profiles.length;
}
