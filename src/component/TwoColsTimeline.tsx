import { styles } from "../styles";

type Props = {
  col1: {
    title: string;
    timeline: string;
    timelineLength: string | null;
  };
  col2: {
    title: string;
    subtitle: string;
    description: Array<string | null>;
  };
  colorName?: string;
  icon: React.ReactNode;
};

function TwoColsTimeline({ col1, col2, colorName, icon }: Props) {
  const bgColor = colorName ? `bg-${colorName}` : "bg-gray";

  return (
    <div className="group flex flex-row shadow-md hover:shadow-xl">
      <div className="basis-4/12">
        <div className="just relative flex h-full flex-col items-center py-10">
          <h5 className={`${styles.heading5} text-black`}>{col1.title}</h5>
          <p className={`${styles.paragraph} text-center`}>{col1.timeline}</p>
          {col1.timelineLength && (
            <span className="italic text-tertiary">
              ({col1.timelineLength})
            </span>
          )}
        </div>
      </div>

      <div className={`relative mx-6 w-[5px] ${bgColor}`}>
        <div
          className={`border- absolute -left-[25px] top-7 flex h-[56px] w-[56px] items-center justify-center rounded-full border-4 border-slate-100 bg-white p-2 shadow-md transition duration-200 group-hover:border-secondary`}
        >
          {icon}
        </div>
      </div>

      <div className="basis-8/12">
        <div className="w-full px-12 py-10">
          <h5 className={`${styles.heading5} text-primary`}>{col2.title}</h5>
          <p className={`my-1 text-[18px] font-bold italic text-tertiary`}>
            {col2.subtitle}
          </p>
          <ul className="list-disc">
            {col2.description.map((desc) => (
              <li className={`${styles.paragraph} my-2`}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TwoColsTimeline;
