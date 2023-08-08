import Input from 'components/Input';
import Select from 'components/Select';
import { setAppSize } from 'features';
import { useAppDispatch, useDebounce } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { api } from 'utils';

type TFormData = {
  status: string;
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('resize', () =>
      dispatch(
        setAppSize({ width: window.innerWidth, height: window.innerHeight }),
      ),
    );
    return () => {
      window.removeEventListener('resize', () =>
        dispatch(
          setAppSize({ width: window.innerWidth, height: window.innerHeight }),
        ),
      );
    };
  }, []);

  const [keyword, setKeyword] = useState('');
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

  const debounceValue = useDebounce(todos, 500);

  const {
    control,
    watch,
    resetField,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TFormData>({
    defaultValues: {
      status: undefined,
    },
  });
  const onSubmit: SubmitHandler<TFormData> = (data) => {};

  return (
    <>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.currentTarget.value)}
      />
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            label="Trạng thái"
            options={debounceValue.map((e) => ({
              label: `${e.id} - ${e.name}`,
              value: e.id,
            }))}
            onSearch={(keyword) => {
              fetchTodos(keyword && { id: keyword });
            }}
            {...field}
          />
        )}
      />
      <Outlet />
    </>
  );
}

export default App;
