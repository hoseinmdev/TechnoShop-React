const { default: Skeleton } = require("components/common/Skeleton");
const { default: createEmptyArray } = require("utils/createEmptyArray");

const SortProducts = ({ category, products }) => {
  if (category) {
    return (
      <div className="flex w-full items-center justify-between text-base dark:text-white/70 lg:justify-start lg:gap-6">
        <p className="hidden lg:block">Sort by:</p>
        <div className="hidden items-center justify-center gap-2 lg:flex">
          <span className="border-l border-gray-300 px-4 py-1 font-bold text-violet-700 dark:font-normal dark:text-violet-400 lg:cursor-pointer">
            Best selling
          </span>
          <span className="border-l border-gray-300 px-4 py-1 font-bold text-violet-700 dark:font-normal dark:text-violet-400 lg:cursor-pointer">
            Lowest price
          </span>
          <span className="border-l border-gray-300 px-4 py-1 font-bold text-violet-700 dark:font-normal dark:text-violet-400 lg:cursor-pointer">
            Highest price
          </span>
          <span className="rounded-lg bg-violet-100 px-4 py-1 font-bold text-violet-700 lg:cursor-pointer">
            Newest
          </span>
        </div>
        <div>
          {products ? (
            <span className="rounded-lg bg-violet-100 px-4 py-1 font-bold text-violet-700 lg:cursor-pointer">
              Products: {products.length}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Searching:
              <Skeleton width={"2rem"} height={"1rem"} radius={"30px"} />
            </span>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`hidden items-center justify-center gap-6 lg:flex`}>
        {createEmptyArray(6).map((p, index) => {
          return (
            <Skeleton
              key={index}
              width={"5rem"}
              height={"1.8rem"}
              radius={"8px"}
            />
          );
        })}
      </div>
    );
  }
};
export default SortProducts;
