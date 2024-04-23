import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Button,
  Checkbox,
  Input,
  Modal,
  Select,
  Switch,
  TextareaAutosize,
} from 'components';
import InputFile from 'components/Input/File';
import InputOtp from 'components/Input/Otp';
import { useDebounce } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { api } from 'utils';
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

  const [keyword, setKeyword] = useState('');
  const debounceValue = useDebounce(keyword, 300);
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = useCallback(async (params?) => {
    console.log('Params:', params);

    const res = await api.get(
      'https://jsonplaceholder.typicode.com/users',
      params,
    );

    setTodos(res);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    fetchTodos({ q: debounceValue });
  }, [debounceValue]);

  const [uploadFile, setUploadFile] = useState<File[]>();

  const onChangeFile = (files: File[]) => {
    setUploadFile(files);
  };

  return (
    <div className="m-10 flex flex-col gap-4">
      <Alert>Success</Alert>
      <Alert className="text-blue-500">Success</Alert>
      <Alert className="text-rose-500">Success</Alert>

      <Modal
        renderLink={({ onOpen }) => (
          <Button className="" onClick={onOpen}>
            Open Modal
          </Button>
        )}
        renderHeader={() => <h4>Title</h4>}
        renderContent={() => <div>Content</div>}
        renderFooter={() => <div>Footer</div>}
      />

      <InputFile
        label="Uploader Single"
        placeholder="Uploader placeholder"
        value={uploadFile}
        onChange={onChangeFile}
      />

      <InputFile
        label="Uploader Multiple"
        className="h-20 !w-20"
        multiple
        maxFiles={3}
        placeholder="Uploader placeholder"
        value={uploadFile}
        onChange={onChangeFile}
      />

      <InputFile
        label="Uploader Multiple"
        className="h-20 !w-20"
        multiple
        maxFiles={3}
        placeholder="Uploader placeholder"
        value={uploadFile}
        onChange={onChangeFile}
        error
        helperText="Oops"
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
            prefix="TD_"
            required
            floating
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

      <Controller
        name="keyword"
        control={control}
        render={({ field }) => (
          <Input
            label="Name"
            prefix="TD_"
            required
            floating
            disabled
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
            disabled
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
            prefix="TD_"
            required
            disabled
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
            placeholder="Enter Name"
            disabled
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
          <TextareaAutosize
            label="Name"
            required
            minRows={5}
            maxRows={8}
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
          <TextareaAutosize
            label="Name"
            required
            minRows={5}
            maxRows={8}
            floating
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
          <TextareaAutosize
            label="Name"
            required
            minRows={5}
            maxRows={8}
            disabled
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
          <TextareaAutosize
            label="Name"
            required
            minRows={5}
            maxRows={8}
            floating
            disabled
            {...field}
            error={!!errors.keyword}
            helperText={errors.keyword?.message}
          />
        )}
      />

      <InputOtp
        value="123456"
        valueLength={6}
        onChange={(val) => {
          console.log('Val:', val);
        }}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Trạng thái"
            placeholder="Chọn trạng thái"
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            keyword={keyword}
            onSearch={(keyword) => {
              setKeyword(keyword);
            }}
            {...field}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            placeholder="Chọn trạng thái"
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            multiple
            floating
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            floating
            placeholder="Chọn trạng thái"
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Trạng thái"
            required
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            keyword={keyword}
            onSearch={(keyword) => {
              setKeyword(keyword);
            }}
            {...field}
            error
            helperText="Oops"
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            required
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
            error
            helperText="Oops"
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Trạng thái"
            floating
            required
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            keyword={keyword}
            onSearch={(keyword) => {
              setKeyword(keyword);
            }}
            {...field}
            error
            helperText="Oops"
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            floating
            required
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
            error
            helperText="Oops"
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Trạng thái"
            floating
            required
            disabled
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            keyword={keyword}
            onSearch={(keyword) => {
              setKeyword(keyword);
            }}
            {...field}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            floating
            required
            disabled
            options={todos.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            {...field}
          />
        )}
      />

      <Checkbox label="Terms" className="text-blue-400" />
      <Checkbox label="Terms" className="text-neutral-200" disabled />

      <Switch label="Terms" className="text-blue-400" />
      <Switch label="Terms" disabled className="text-blue-400" />
      <Switch label="Terms" disabled checked className="text-blue-400" />

      <Button className="">Submit</Button>
      <Button className="text-rose-500">Submit</Button>

      <Button className="text-neutral-200" contentClassName="text-black">
        Submit
      </Button>

      <Button className="" disabled>
        Submit
      </Button>
      <Button className="text-rose-500" contentClassName="text-black" disabled>
        Submit
      </Button>

      <Button className="" loading>
        Submit
      </Button>
      <Button className="text-rose-500" loading>
        Submit
      </Button>

      <Button className="" variant="outlined">
        Submit
      </Button>
      <Button className="text-rose-500" variant="outlined">
        Submit
      </Button>

      <Button className="" variant="outlined" disabled>
        Submit
      </Button>
      <Button className="text-rose-500" variant="outlined" disabled>
        Submit
      </Button>
    </div>
  );
}

export default App;
