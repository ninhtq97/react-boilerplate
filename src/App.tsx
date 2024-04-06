import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Input, Modal } from 'components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const ValidateSchema = yup.object({
  keyword: yup.string().required(),
  status: yup.string().required(),
});

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<yup.InferType<typeof ValidateSchema>>({
    resolver: yupResolver(ValidateSchema),
    defaultValues: {
      keyword: '',
      status: undefined,
    },
  });
  const onSubmit: SubmitHandler<yup.InferType<typeof ValidateSchema>> = (
    data,
  ) => {
    console.log('DATA:', data);
  };

  return (
    <div className="m-10 flex flex-col gap-4">
      <Alert className="" variant="primary">
        Success
      </Alert>

      <Modal
        renderLink={({ onOpen }) => (
          <div className="" onClick={onOpen}>
            Open Modal
          </div>
        )}
        renderHeader={() => <h4>Title</h4>}
        renderContent={() => <div>Content</div>}
        renderFooter={() => <div>Footer</div>}
      />

      <Controller
        name="keyword"
        control={control}
        render={({ field }) => (
          <Input
            label="Name"
            required
            {...field}
            error={!!errors.keyword}
            helperText={errors.keyword?.message}
          />
        )}
      />

      <Controller
        name="keyword"
        control={control}
        render={({ field }) => (
          <Input
            label="Name"
            required
            floating
            {...field}
            error={!!errors.keyword}
            helperText={errors.keyword?.message}
          />
        )}
      />

      <Button className="" onClick={() => handleSubmit(onSubmit)()}>
        Submit
      </Button>
    </div>
  );
}

export default App;
