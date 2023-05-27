import { styles } from "../styles";

type Props = {
  col1: {
    title: string;
    description: string;
  };
  col2: {
    title: string;
    subtitle: string;
    description: string;
  };
  colorName?: string;
  icon: React.ReactNode;
};

function TwoColsTimeline({ col1, col2, colorName, icon }: Props) {
  const bgColor = colorName ? `bg-${colorName}` : "bg-gray";
  const borderColor = colorName ? `border-${colorName}` : "border-gray";

  return (
    <div className="flex flex-row ">
      <div className="basis-4/12 ">
        <div className="relative flex h-full flex-col py-8">
          <h5 className={`${styles.heading5} text-primary`}>{col1.title}</h5>
          <p className={`${styles.paragraph}`}>{col1.description}</p>
        </div>
      </div>

      <div className="basis-8/12 ">
        <div className="flex h-full w-full flex-row items-stretch ">
          <div className={`relative w-[5px] ${bgColor}`}>
            <div
              className={`border- absolute -left-[25px] top-7 flex h-[56px] w-[56px] items-center justify-center rounded-full border-4 border-slate-100 bg-white p-2 shadow-md`}
            >
              {icon}
            </div>
          </div>
          <div className=" ml-6 w-full px-10 py-8">
            <h5 className={`${styles.heading5} text-primary`}>{col2.title}</h5>
            <p className={`my-1 font-bold italic text-tertiary`}>
              {col2.subtitle}
            </p>
            <p className={`${styles.paragraph} my-2`}>{col2.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TwoColsTimeline;
