import { PiArrowSquareOutBold } from "react-icons/pi";

const PDFDownloadButton = () => {
  return (
    <>
      <a
        href="resume of Md. Nuruzzaman.pdf"
        download="resume of Md. Nuruzzaman.pdf"
        className="btn btn-sm sm:h-10 bg-primary hover:bg-primary text-secondary border-none rounded font-medium z-10"
      >
        My Resume <PiArrowSquareOutBold />
      </a>
    </>
  );
};

export default PDFDownloadButton;
