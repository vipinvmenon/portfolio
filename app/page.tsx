import { getPageIcon } from '@/utils/navigation';

export default function Home() {
  const PageIcon = getPageIcon('/');
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-white italic mb-4 flex items-center gap-4">
        Vipin Menon
      </h1>
      <p className="text-xl text-gray-400">
        UI Engineer / Product Developer
      </p>
    </div>
  );
}
