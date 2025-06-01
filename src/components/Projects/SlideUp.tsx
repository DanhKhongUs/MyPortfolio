import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  id?: string;
  classes?: string;
  offset?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SlideUp = ({
  id = "",
  classes = "",
  children,
  offset = "0px",
  onClick,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ngừng quan sát sau khi đã hiển thị
        }
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [offset]);

  return (
    <div
      ref={ref}
      id={id}
      onClick={onClick}
      className={`relative transition-opacity duration-700 ease-out ${
        isVisible
          ? "opacity-100 animate-fadeIn animate-slideUpCubiBezier"
          : "opacity-0"
      } ${classes}`}
    >
      {children}
    </div>
  );
};

export default SlideUp;
