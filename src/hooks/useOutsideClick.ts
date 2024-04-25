import { useEffect, useRef } from 'react';

export const useOutsideClick = (
  $refs: React.RefObject<HTMLElement>[],
  isListening: boolean,
  onClick: () => void,
  $listeningRef?: React.RefObject<HTMLElement>,
) => {
  const $mouseDownTargetRef = useRef(null);

  useEffect(() => {
    const onMouseDown = (e) => {
      $mouseDownTargetRef.current = e.target;
    };

    const onMouseUp = (e) => {
      const isAnyIgnoredElementAncestorOfTarget = $refs.some(($ref) => {
        return (
          $ref.current &&
          ($ref.current.contains($mouseDownTargetRef.current) ||
            $ref.current.contains(e.target))
        );
      });

      if (e.button === 0 && !isAnyIgnoredElementAncestorOfTarget) {
        onClick();
      }
    };

    const $listeningEl = ($listeningRef || {}).current || document;

    if (isListening) {
      $listeningEl.addEventListener('mousedown', onMouseDown);
      $listeningEl.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      $listeningEl.removeEventListener('mousedown', onMouseDown);
      $listeningEl.removeEventListener('mouseup', onMouseUp);
    };
  }, [$refs, isListening, onClick, $listeningRef]);
};

export default useOutsideClick;
