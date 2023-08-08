import IllustrationTrash from 'assets/images/trash.png';
import Button from 'components/Button';
import { useApi } from 'hooks';
import Modal from '.';

type Props = {
  title: string;
  description: React.ReactNode;
  onDelete?: () => Promise<void>;
} & React.ComponentProps<typeof Modal>;

const ModalDelete: React.FC<Props> = ({
  title,
  description,
  onDelete: onDeleteProps,
  ...props
}) => {
  const { loading, onCallWithCatchError } = useApi();

  const onDelete = async () => {
    onDeleteProps && (await onCallWithCatchError(onDeleteProps));
  };

  return (
    <Modal
      width={470}
      renderHeader={() => (
        <h4 className="font-medium text-xl leading-[30px]">{title}</h4>
      )}
      renderContent={({ onClose }) => (
        <div className="flex flex-col items-center gap-6">
          <img src={IllustrationTrash} alt="" />
          {description}
          <div className="flex justify-center gap-4">
            <Button
              color="secondary"
              type="button"
              className="min-w-[120px]"
              onClick={onClose}
            >
              <span className="text-black-2">Hủy</span>
            </Button>
            <Button
              color="error"
              className="min-w-[120px]"
              loading={loading}
              onClick={async () => {
                await onDelete();
                onClose();
              }}
            >
              Xóa
            </Button>
          </div>
        </div>
      )}
      {...props}
    />
  );
};

export default ModalDelete;
