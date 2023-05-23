import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export default function ObservableContainer({
  children,
  ...props
}: {
  children: ReactNode;
  [props: string]: any;
}) {
  const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <div {...props} ref={ref}>
      <div
        className={`min-h-screen grow flex flex-nowrap overflow-hidden flex-col items-center p-4 delay-200 duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
