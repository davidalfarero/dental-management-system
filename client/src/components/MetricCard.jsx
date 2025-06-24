import React from "react";

const MetricCard = () => {
  const metrics = [
    { value: "5k+", label: "Smiles Transformed" },
    { value: "5+", label: "Trusted Years" },
    { value: "99%", label: "Happy Patients" },
    { value: "300+", label: "Braces Removed" },
  ];

  return (
    <div className="max-w-3xl md:mx-auto flex text-center justify-center p-4 md:px-4 md:py-8 rounded-2xl bg-base-100/50 shadow-lg backdrop-blur-xs">

      {metrics.map((metric, index) => (
        <React.Fragment key={index}>
          <div className="md:flex gap-2 px-2">
            <div className="text-primary text-xl md:text-4xl font-bold">{metric.value}</div>
            <div className="text-base-content/80 text-xs md:text-base font-semibold">{metric.label}</div>
          </div>

          {index < metrics.length - 1 && (
            <>
              <div className="border-l border-dashed border-base-content h-auto mx-2 md:mx-4"></div>
            </>
          )}

        </React.Fragment>
      ))}

    </div>
  );
};
export default MetricCard;