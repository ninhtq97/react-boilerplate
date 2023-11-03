import { FC, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Position } from 'types';

type Props = {
  title: string;
  position?: Position;
} & React.PropsWithChildren;

const Tooltip: FC<Props> = ({ title, position = 'bottom', children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const $linkRef = useRef<HTMLDivElement>(null);
  const $tooltipRef = useRef<HTMLDivElement>(null);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);

  useLayoutEffect(() => {
    const setTooltipPosition = () => {
      const { top, left } = calcPosition(position, $tooltipRef, $linkRef);
      $tooltipRef.current!.style.transform = `translate(${left}px, ${top}px)`;
    };

    if (isOpen) {
      setTooltipPosition();
      window.addEventListener('resize', setTooltipPosition);
      window.addEventListener('scroll', setTooltipPosition);
    }

    return () => {
      window.removeEventListener('resize', setTooltipPosition);
      window.removeEventListener('scroll', setTooltipPosition);
    };
  }, [isOpen, position]);

  return (
    <div
      className="tooltip"
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      onBlur={closeTooltip}
    >
      <div className="tooltip__link" ref={$linkRef}>
        {children}
      </div>

      {isOpen &&
        createPortal(
          <div className="tooltip__popper" ref={$tooltipRef}>
            {title}
          </div>,
          document.querySelector('body')!,
        )}
    </div>
  );
};

const calcPosition = (
  position: Position,
  $tooltipRef: React.RefObject<HTMLDivElement>,
  $linkRef: React.RefObject<HTMLDivElement>,
) => {
  const margin = 10;

  if ($tooltipRef.current && $linkRef.current) {
    const tooltipRect = $tooltipRef.current!.getBoundingClientRect();
    const linkRect = $linkRef.current!.getBoundingClientRect();

    const linkCenterY = linkRect.top + linkRect.height / 2;
    const linkCenterX = linkRect.left + linkRect.width / 2;

    const placements = {
      top: {
        top: linkRect.top - margin - tooltipRect.height + window.scrollY,
        left: linkCenterX - tooltipRect.width / 2,
      },
      right: {
        top: linkCenterY - tooltipRect.height / 2,
        left: linkRect.right + margin,
      },
      bottom: {
        top: linkRect.bottom + margin + window.scrollY,
        left: linkCenterX - tooltipRect.width / 2,
      },
      left: {
        top: linkCenterY - tooltipRect.height / 2,
        left: linkRect.left - margin - tooltipRect.width,
      },
    };
    return placements[position];
  }

  return { top: 0, left: 0 };
};

export default Tooltip;
