export const CreatorsSectionSkeleton = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading Skeleton */}
        <div className="h-10 md:h-14 w-64 md:w-96 mx-auto bg-gray-700/40 rounded-lg animate-pulse mb-12" />

        <div className="relative overflow-hidden">
          <div className="flex w-max gap-6 animate-pulse">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[200px] sm:w-[260px] md:w-[300px]"
              >
                {/* Image Skeleton */}
                <div className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-2xl bg-gray-700/40 mb-4" />

                {/* Name Skeleton */}
                <div className="h-5 w-32 md:w-48 bg-gray-600/40 rounded mb-2 ml-23 md:ml-35" />

                {/* Profession Skeleton */}
                <div className="h-4 w-40 md:w-56 bg-gray-600/30 rounded ml-23 md:ml-35" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
