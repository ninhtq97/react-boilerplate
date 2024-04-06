import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  Input,
  Modal,
  Select,
  TextareaAutosize,
} from 'components';
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

  return (
    <div className="m-10 flex flex-col gap-4">
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
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            multiple
            label="Trạng thái"
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

      <Checkbox label="Terms" className="border-black-7" checked />

      <Button className="" onClick={() => handleSubmit(onSubmit)()}>
        Submit
      </Button>
    </div>
  );
}

export default App;
