import SecondaryButton from "./../common/SecondaryButton";

const CardData = ({ image, title, description, link }) => {
  return (
    <div
      className=" xl:max-w-sm rounded overflow-hidden shadow-lg bg-cover bg-center h-[413px] relative"
      style={{ backgroundImage: `url(${image})` }} 
    >
      <div className="px-6 py-4 bg-gradient-to-t from-gray-950/60 to-black/20  backdrop-blur-sm bg-opacity-75 absolute bottom-0" >
        <h2 className="font-semibold text-xl mb-2 text-gray-50 w-[80%]">
          {title}
        </h2>
        <p className="text-gray-200 text-base">{description}</p>
        <SecondaryButton to={link} className={"mt-4"}>
          Know More
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CardData;
