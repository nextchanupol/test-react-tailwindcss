import { FC } from 'react';

interface Props {
  color?: 'success' | 'danger';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CommonButton: FC<Props> = ({
  color = 'success',
  children,
  onClick
}) => {
  const bgColor = color === 'success' ? 'tw-bg-green-500' : 'tw-bg-red-500';
  const bgRingColor =
    color === 'success' ? 'tw-ring-green-200' : 'tw-ring-red-200';
  return (
    <button
      onClick={onClick}
      className={`
      tw-w-full tw-inline-flex tw-items-center tw-justify-center 
      tw-px-4 tw-py-2 ${bgColor} tw-border tw-border-transparent 
      tw-rounded-md  tw-font-semibold tw-capitalize tw-text-white 
      hover:${bgColor} active:${bgColor} focus:tw-outline-none focus:${bgColor} 
      focus:tw-ring focus:${bgRingColor} disabled:tw-opacity-25 tw-transition`}
    >
      {children}
    </button>
  );
};
