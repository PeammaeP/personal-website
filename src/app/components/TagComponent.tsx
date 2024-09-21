// @ts-expect-error : parameter can be any of the type
const TagComponent = ({ selectedTab, tagName }) => {
  return (
    <button
      onClick={() => selectedTab(tagName)}
      className="font-mono font-bold btn btn-primary w-1/12 text-xl bg-gradient-to-r from-slate-900 to-slate-700 border-[#121212] hover:border-[#121212] rounded-full text-white"
    >
      <p>{tagName}</p>
    </button>
  );
};

export default TagComponent;
