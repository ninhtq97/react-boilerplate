import { fetchMe } from 'apis';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import Icon from 'components/Icon';
import Loading from 'components/Loading';
import Sidebar from 'components/Sidebar';
import { ROUTE_PATHS } from 'constants/route';
import { STORE_KEYS } from 'constants/storage';
import { selectApp, selectMe, setMe } from 'features';
import { useApi, useAppDispatch, useAppSelector } from 'hooks';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getStored } from 'utils';

type Props = {
  appName: string;
};

const Layout: React.FC<Props> = ({ appName }) => {
  const navigate = useNavigate();
  const app = useAppSelector(selectApp);
  const me = useAppSelector(selectMe);
  const dispatch = useAppDispatch();
  const { onCallWithCatchError } = useApi();

  const [isActive, setIsActive] = useState(app.width > 991);
  const onToggleSidebar = () => setIsActive(!isActive);

  useEffect(() => {
    setIsActive(app.width > 991);
  }, [app.width]);

  useEffect(() => {
    const token = getStored(STORE_KEYS.AUTH);
    if (!token) {
      navigate(ROUTE_PATHS.AUTH.SIGN_IN);
    } else {
      if (!me) {
        onCallWithCatchError(async () => {
          const me = await fetchMe();
          dispatch(setMe(me));
        });
      }
    }
  }, [me]);

  return (
    <div className="flex">
      {!me ? (
        <Loading />
      ) : (
        <>
          <Sidebar className={`max-w-[237px] ${isActive ? 'active' : ''}`} />
          <div
            className={`${
              appName || ''
            } flex flex-col gap-3 flex-1 p-4 pb-0 lg:pt-7 lg:pl-[30px] lg:pr-5 duration-[250ms] ease-in-out w-full min-h-screen ${
              isActive ? 'ml-auto max-w-[calc(100%_-_237px)]' : 'ml-0 w-full'
            }`}
          >
            {app.width < 992 && (
              <Icon
                clickable
                tag={'div'}
                className="w-6 h-6"
                icon={isActive ? <ArrowLeft /> : <ArrowRight />}
                onClick={onToggleSidebar}
              />
            )}
            <div
              className={`relative flex flex-col h-full overflow-hidden bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_4px_25px_rgba(141,_171,_255,_0.2)] ${
                isActive ? 'overflow-x-auto' : ''
              }`}
            >
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
