import React, { useEffect, useState } from "react";

function Title({className, title}) {
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const [date, setDate] = useState(new Date());
  console.log(date);
  useEffect(() => {
    const timer = setInterval(() => setDate(date), 1000);
    return function clearup() {
      clearInterval(timer);
    };
  });
  console.log(date);
  return (
    <div className={className}>
      <span className="span_title">{title}</span>
      <span className="span_title">
        {days[date.getDay()]} {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </span>
    </div>
  );
}

export default Title;
