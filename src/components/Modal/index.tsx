import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from 'utils';
import { Icon, Times } from '../Icon';

type TRenderLink = {
  onOpen: () => void;
};

type TRenderContent = {
  onClose: () => void;
};

type Props = {
  container?: string;
  width?: number;
  withCloseIcon?: boolean;
  backdropDisabled?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  renderLink?: React.FC<TRenderLink>;
  renderHeader?: React.FC;
  renderContent?: React.FC<TRenderContent>;
  renderFooter?: React.FC<TRenderContent>;
} & React.HTMLProps<HTMLElement>;

const Modal: React.FC<Props> = ({
  className,
  container = 'body',
  width = 650,
  withCloseIcon = true,
  backdropDisabled = false,
  isOpen: propsIsOpen,
  onClose: propsOnClose,
  renderLink,
  renderHeader,
  renderContent,
  renderFooter,
}) => {
  const [stateIsOpen, setStateOpen] = useState(false);
  const isControlled = typeof propsIsOpen === 'boolean';
  const isOpen = isControlled ? propsIsOpen : stateIsOpen;

  const $modalRef = useRef<HTMLDivElement>(null);
  const $clickableOverlayRef = useRef<HTMLDivElement>(null);

  const onOpen = useCallback(() => setStateOpen(true), []);
  const onClose = useCallback(() => {
    if (!isControlled) {
      setStateOpen(false);
    } else {
      propsOnClose?.();
    }
    document.body.style.overflow = 'visible';
  }, [isControlled, propsOnClose]);

  useEffect(() => {
    $clickableOverlayRef?.current?.scrollIntoView();
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
  }, [isOpen]);

  return (
    <>
      {!isControlled && renderLink?.({ onOpen })}

      <AnimatePresence>
        {isOpen && (
          <>
            {createPortal(
              <div className="modal">
                <motion.div
                  className="modal-overlay"
                  ref={$clickableOverlayRef}
                  onClick={!backdropDisabled ? onClose : undefined}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65 }}
                >
                  <motion.div
                    className={cn('modal-container', className)}
                    style={{ maxWidth: `${width}px` }}
                    ref={$modalRef}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isOpen ? 'open' : 'close'}
                    variants={{
                      open: { scale: [0, 1.1, 1], opacity: [0, 1] },
                      close: { scale: [1, 1.1, 0], opacity: [1, 0] },
                    }}
                    exit={{ scale: [1, 1.1, 0], opacity: [1, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {renderHeader && (
                      <div className="modal-header">
                        {renderHeader({})}
                        {withCloseIcon && (
                          <Icon
                            clickable
                            className="modal-close"
                            tag="div"
                            icon={<Times />}
                            onClick={onClose}
                          />
                        )}
                      </div>
                    )}
                    {renderContent && (
                      <div className="modal-content">
                        {renderContent({ onClose })}
                      </div>
                    )}
                    {renderFooter && (
                      <div className="modal-footer">
                        {renderFooter({ onClose })}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </div>,
              document.querySelector(container)!,
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
