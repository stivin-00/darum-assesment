interface ItemProps {
  title: string;
  links: { name: string }[];
}

export const TopFooterItem: React.FC<ItemProps> = ({ title, links }) => {
  return (
    <div className="w-full py-3">
      <div className="w-full flex justify-between items-center cursor-pointer text-left ">
        <p className="font-semibold">{title}</p>
      </div>

      <div className=" bg-white">
        {links.map((link) => (
          <p className="text-left text-sm hover:text-[#0ba4db] pt-2">
            {link.name}
          </p>
        ))}
      </div>
    </div>
  );
};
