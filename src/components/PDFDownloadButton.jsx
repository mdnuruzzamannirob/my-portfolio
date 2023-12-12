import { FaFileArrowDown } from "react-icons/fa6";

const PDFDownloadButton = () => {
  return (
    <>
      <a
        href="PersonalBranding.pdf"
        download="Resume.pdf"
        className="btn btn-sm bg-primary hover:bg-primary text-white border-none rounded-md font-medium"
      >
        <FaFileArrowDown /> My Resume
      </a>
    </>
  );
};

export default PDFDownloadButton;
