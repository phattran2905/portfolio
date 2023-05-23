
type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function Service({ title, description, icon }: Props) {
  return (
    <div className="flex flex-row items-stretch justify-between gap-x-8 rounded-lg border-2 border-extra-light-gray p-6 shadow-md">
      <div>{icon}</div>
      <div>
        <h5 className="font-semibold capitalize">{title}</h5>
        <p className="mt-4 text-[16px] font-normal leading-[24px] text-tertiary capitalize">
          {description}
        </p>
      </div>
    </div>
  );
}
export default Service;
