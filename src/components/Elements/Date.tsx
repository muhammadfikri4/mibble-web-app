"use client";
import React, { FormEvent } from "react";
import { DatePicker } from "rsuite";

const Date = (props: {
  defaultValue: Date | null;
  onChange: (value: Date | null) => void;
}) => {
  const { defaultValue, onChange } = props;
  return (
    <>
      <DatePicker
        format="dd-MM-y"
        size="lg"
        placeholder="Date of Birth"
        oneTap
        className="h-12"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
};

export default Date;
