type ScreenshotPlaceholderProps = {
  title: string;
  requirements: string[];
  purpose: string;
  fileName?: string;
};

export default function ScreenshotPlaceholder({
  title,
  requirements,
  purpose,
  fileName,
}: ScreenshotPlaceholderProps) {
  return (
    <div className="flex min-h-[500px] flex-col justify-center rounded-3xl border-2 border-dashed border-[#4E5D30]/30 bg-white p-10 shadow-sm">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#4E5D30]">
          Future App Screenshot
        </p>

        <h3 className="mt-4 text-3xl font-bold text-[#1F2937]">
          {title}
        </h3>

        {fileName && (
          <p className="mt-2 text-sm text-gray-500">
            Save as: {fileName}
          </p>
        )}
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-[#1F2937]">
          Screenshot Requirements
        </h4>

        <ul className="mt-4 space-y-2 text-gray-600">
          {requirements.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-[#1F2937]">
          Purpose
        </h4>

        <p className="mt-2 text-gray-600">
          {purpose}
        </p>
      </div>
    </div>
  );
}

