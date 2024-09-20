// @ts-expect-error : parameter can be any of the type
const TagComponent = ({ selectedTab, isActive, tagName }) => {
  const buttonComponent = isActive ? "bg-[#151515]" : "";
  return (
    <button
      onClick={() => selectedTab(tagName)}
      className={`rounded-full border-2 border-l-white px-6 py-6 text-xl w-2/12 hover:bg-[#121212] ${buttonComponent}`}
    >
      <p>{tagName}</p>
    </button>
  );
};

export default TagComponent;
