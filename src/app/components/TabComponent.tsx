// @ts-expect-error tabName has any type
const TabComponent = ({ selectedTab, isActive, tabName }) => {
  const buttonProperty = isActive
    ? "hover:underline hover:text-white"
    : "text-[#ddd6d6]";

  return (
    <button onClick={selectedTab}>
      <p className={`mr-5 text-xl font-bold ${buttonProperty}`}>
        {tabName}
      </p>
    </button>
  );
};

export default TabComponent;
