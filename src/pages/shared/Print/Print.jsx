import React from "react";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";

const Print = ({ tableRef }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <div>
      <div ref={componentRef} />

      <button onClick={handlePrint} className="btn btn-md bg-green-500  text-white">
        Print/Save to PDF
        <AiFillPrinter className="text-xl"></AiFillPrinter>
      </button>
    </div>
  );
};

export default Print;
