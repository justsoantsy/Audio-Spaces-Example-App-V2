'use server';
import IntroPage from '@/components/IntroPage/IntroPage';

interface RoomDetails {
  message: string;
  data: {
    roomId: string;
  };
}

const createRandomRoom = async () => {
  const res = await fetch('https://api.huddle01.com/api/v1/create-room', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Test Room',
      hostWallets: ['0x34cbDba195141f1bFCB4ba184de6c1a2bCa18b5C'],
      roomType: 'AUDIO', // Specify that this room is for audio only
      // Add other necessary parameters as required by your application
    }),
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY ?? '', // Ensure your API key is correctly set
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`API call failed with status code ${res.status}`);
  }

  const data: RoomDetails = await res.json();
  if (!data.data) {
    throw new Error("Data is missing in the API response");
  }
  
  const { roomId } = data.data;
  return roomId;
};

export default async function Home() {
  const roomId = await createRandomRoom();
  return <IntroPage roomId={roomId} />;
}
