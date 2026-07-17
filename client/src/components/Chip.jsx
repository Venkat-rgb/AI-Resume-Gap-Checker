// Reusable Chip
const Chip = ({ text, textColor = "", bgColor = "", moreStyles = "" }) => {
  return (
    <p
      className={`text-sm ${bgColor} py-1 px-2 font-medium ${textColor} rounded-full w-max ${moreStyles}`}
    >
      {text}
    </p>
  );
};

export default Chip;
