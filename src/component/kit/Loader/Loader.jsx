import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#3470ff"
      secondaryColor="#0B44CD"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ flex: 1, justifyContent: "center" }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
