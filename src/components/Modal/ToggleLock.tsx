import IllustrationLock from 'assets/images/lock.png';
import IllustrationUnlock from 'assets/images/unlock.png';
import Button from 'components/Button';
import { useApi } from 'hooks';
import Modal from '.';

type Props = {
  status: boolean;
  title: string;
  description: React.ReactNode;
  onToggleLock: () => void;
} & React.ComponentProps<typeof Modal>;

const ModalToggleLock: React.FC<Props> = ({
  status,
  title,
  description,
  onToggleLock: onToggleLockProps,
  ...props
}) => {
  const { loading, onCallWithCatchError } = useApi();

  const onToggleLock = async () => {
    onToggleLockProps && (await onCallWithCatchError(onToggleLockProps));
  };

  return (
    <Modal
      width={470}
      renderHeader={() => (
        <h4 className="font-medium text-xl leading-[30px]">{title}</h4>
      )}
      renderContent={({ onClose }) => (
        <div className="flex flex-col items-center gap-4">
          <img src={status ? IllustrationLock : IllustrationUnlock} alt="" />
          <div className="flex flex-col items-center gap-6">
            {description}
            <div className="flex justify-center gap-4">
              <Button
                color="secondary"
                className="min-w-[120px]"
                onClick={onClose}
              >
                <span className="text-black-2">Hủy</span>
              </Button>
              <Button
                color={status ? 'error' : 'success'}
                className="min-w-[120px]"
                loading={loading}
                onClick={async () => {
                  await onToggleLock();
                  onClose();
                }}
              >
                {status ? 'Khóa' : 'Xác nhận'}
              </Button>
            </div>
          </div>
        </div>
      )}
      {...props}
    />
  );
};

export default ModalToggleLock;
