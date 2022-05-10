const HeaderOption = ({
  Icon,
  title,
}: {
  Icon?: JSX.Element | any;
  title?: string;
}) => {
  return (
    <div className="header-link">
      {Icon && <Icon className="text-white h-6" />}
      <span>{title}</span>
    </div>
  );
};

export default HeaderOption;
