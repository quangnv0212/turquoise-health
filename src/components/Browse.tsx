export interface IBrowseProps {}

export function Browse(props: IBrowseProps) {
  return (
    <div className="px-52 py-28">
      <div className="flex flex-row justify-between">
        <p className="text-5xl font-bold w-[400px]">Browse by procedure.</p>
        <button>View all</button>
        <></>
      </div>
    </div>
  );
}
