import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintButton = ({tableRef}) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <div>
      <div ref={componentRef} />

      <div className="hidden md:flex justify-center gap-3 flex-wrap pt-11">
        <button
          onClick={handlePrint}
          className="md:btn md:px-3 hover:bg-red-600 rounded-lg md:bg-primaryClr md:text-white md:text-[16px]"
        >
          Print/Save to PDF
        </button>
        <button
          onClick={handlePrint}
          className="md:btn md:px-3 hover:bg-green-600 rounded-lg md:bg-secondaryClr md:text-white md:text-[16px]"
        >
          Print/Save to PDF all
        </button>
      </div>
    </div>
  );
};

export default PrintButton;
