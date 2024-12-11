export default function DiplomasCardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-between p-4 gap-12 border rounded-lg shadow-lg w-full animate-pulse">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-xl"></div>
          <div className="flex flex-col space-y-2">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 h-3 bg-gray-200 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
