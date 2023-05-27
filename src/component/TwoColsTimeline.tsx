import { styles } from "../styles";

type Props = {
  col1: {
    title: string;
    description: string;
  };
  col2: {
    title: string;
    description: string;
  };
  colorName?: string;
};

function TwoColsTimeline({ col1, col2, colorName }: Props) {
  const bgColor = colorName ? `bg-${colorName}` : "bg-gray";
  const borderColor = colorName ? `border-${colorName}` : "border-gray";

  return (
    <div className="flex flex-row">
      <div className="basis-4/12">
        <div className="flex flex-col py-6">
          <h5 className={`${styles.heading5}`}>{col1.title}</h5>
          <p className={`${styles.paragraph} my-2`}>{col1.description}</p>
        </div>
      </div>

      <div className="basis-8/12">
        <div className="flex h-full w-full flex-row items-stretch">
          <div className={`relative w-[5px] ${bgColor}`}>
            <div
              className={`border- absolute -left-[11px] top-7 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 ${borderColor} bg-white`}
            >
              <div
                className={`h-[10px] w-[10px] rounded-full ${bgColor}`}
              ></div>
            </div>
          </div>
          <div className="ml-6 w-full px-4 py-6">
            <h5 className={`${styles.heading5}`}>{col2.title}</h5>
            <p className={`${styles.paragraph} my-2`}>{col2.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TwoColsTimeline;
