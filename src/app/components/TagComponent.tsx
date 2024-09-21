// @ts-expect-error : parameter can be any of the type
const TagComponent = ({ selectedTab, tagName }) => {
  return (
    <button
      onClick={() => selectedTab(tagName)}
      className="btn btn-primary w-1/12 text-2xl bg-[#121212] hover:bg-[#181818] border-white hover:border-white rounded-full text-white"
    >
      <p>{tagName}</p>
    </button>
  );
};

export default TagComponent;
