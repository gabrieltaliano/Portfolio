import React, { ReactNode } from "react";

export default function AnimatedCorners({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`corner-container px-4 py-2 ${className}`}>
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      {children}
    </section>
  );
}
