import React from "react";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="mb-5 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {dayjs().year()} Jocelyn Lam . All rights reserved.
      </small>
    </footer>
  );
}
