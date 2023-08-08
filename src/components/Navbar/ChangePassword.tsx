import { yupResolver } from '@hookform/resolvers/yup';
import { changePassword } from 'apis';
import Button from 'components/Button';
import InputPassword from 'components/Input/Password';
import { VALIDATIONS } from 'constants/validation';
import { useApi } from 'hooks';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TChangePassword } from 'types';
import * as yup from 'yup';

type Props = {
  onSignOut: () => void;
  onClose: () => void;
};

type TFormData = {
  confirmPassword: string;
} & TChangePassword;

const ValidateSchema = yup.object().shape({
  password: VALIDATIONS.PASSWORD,
  newPassword: VALIDATIONS.PASSWORD,
  confirmPassword: VALIDATIONS.CONFIRM_PASSWORD('newPassword'),
});

const ChangePassword: React.FC<Props> = ({ onSignOut, onClose }) => {
  const { onCallWithCatchError } = useApi();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(ValidateSchema),
  });

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    await onCallWithCatchError(async () => {
      const res = await changePassword(data);

      if (res) {
        console.log('Change password res:', res);
        onSignOut();
      }
    });
  };

  return (
    <form
      className="flex flex-col gap-4"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center flex-wrap gap-3">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputPassword
              required
              label="Mật khẩu"
              {...field}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <InputPassword
              required
              label="Mật khẩu mới"
              {...field}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <InputPassword
              required
              label="Xác nhận mật khẩu"
              {...field}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button
          className="min-w-[120px]"
          type="button"
          color="secondary"
          onClick={onClose}
        >
          <span className="text-black-2">Hủy</span>
        </Button>
        <Button className="min-w-[120px]" loading={isSubmitting}>
          Cập nhật
        </Button>
      </div>
    </form>
  );
};

export default ChangePassword;
