import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export const NextButton = ({
  children,
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className="group flex items-center gap-12 rounded-full bg-pink-300 py-2.5 pr-3.5 pl-4"
      {...rest}
    >
      <span className="max-w-3xs truncate">{children}</span>
      <IoIosArrowRoundForward className="scale-200 rounded-full bg-gray-950 text-white transition duration-300 group-hover:scale-250" />
    </button>
  );
};
