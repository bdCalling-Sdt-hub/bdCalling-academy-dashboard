/* eslint-disable @typescript-eslint/no-explicit-any */
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./According.module.css";
const AccordionPanel = ({ header, content, isActive, onClick }: any) => {
  return (
    <div
      className={`accordion-panel ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="accordion-header">
        {header}
        {isActive ? (
          <UpOutlined className="icon" />
        ) : (
          <DownOutlined className="icon" />
        )}
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export default AccordionPanel;
