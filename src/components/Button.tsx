type ButtonProps = {
  label: string;
  iconUrl: string;
};

const Button = ({ label, iconUrl }: ButtonProps) => {
  return (
    <button className="">
      {label}
      <img
        src={iconUrl}
        alt="button icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
