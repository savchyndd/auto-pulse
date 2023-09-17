import "./DescriptionList.scss";

const DescriptionList = ({ list = [], size = "large" }) => {
  return (
    <ul className={`description__list ${size}`}>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default DescriptionList;
