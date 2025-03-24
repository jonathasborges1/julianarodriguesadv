// src/components/WaveSeparator.tsx

interface WaveSeparatorProps {
  color?: string;
  flip?: boolean; // para inverter a onda
}

const WaveSeparator = ({
  color = "#fff",
  flip = false,
}: WaveSeparatorProps) => {
  return (
    <div className="w-full overflow-hidden leading-[0] mt-[-1px]">
      <svg
        className={`block w-full h-[60px] md:h-[100px] ${
          flip ? "rotate-180" : ""
        }`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.5,18.17,96.92,29.78,147.67,30.89,
           58.83,1.28,113.17-12.7,169.08-20.21,
           C408.79,46,467.42,41.06,525,47.89,
           582.5,54.56,638.79,71,694.67,81.58,
           750.38,92.07,807.17,93.86,864.75,88.81,
           923.58,83.54,977.92,72.32,1033.83,65.21,
           1081.33,59.15,1130.75,57.29,1181.5,62.72,
           1190,63.69,1200,66,1200,66V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
