/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";

export default function SelectField({
  setSelectedValue,
  placeholder,
  options,
  maxCount = 1,
}: any) {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedValue(value);
  };
  return (
    <div>
      <Select
        mode="multiple"
        maxCount={maxCount}
        size="large"
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={handleChange}
        // maxTagCount={1}
        options={options}
      />
    </div>
  );
}
