import Input from 'components/Input';
import Range from 'components/Input/Range';
import Switch from 'components/Input/Switch';
import Modal from 'components/Modal';
import Select from 'components/Select';
import { setAppSize } from 'features';
import { useAppDispatch, useDebounce } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { api } from 'utils';

type TFormData = {
  keyword: string;
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

  const debounceValue = useDebounce(keyword, 300);

  const {
    control,
    watch,
    resetField,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TFormData>({
    defaultValues: {
      keyword: '',
      status: undefined,
    },
  });
  const onSubmit: SubmitHandler<TFormData> = (data) => {};

  useEffect(() => {
    fetchTodos({ q: debounceValue });
  }, [debounceValue]);

  return (
    <>
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
        render={({ field }) => <Input label="AA" {...field} />}
      />

      <Switch />

      <div className="my-20">
        <Range />
      </div>

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            isMultiple
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
      <Outlet />
    </>
  );
}

export default App;
