import { fetchMe } from 'apis';
import Illustration from 'assets/images/illustration.png';
import Logo from 'assets/images/logo.png';
import { ROUTE_PATHS } from 'constants/route';
import { STORE_KEYS } from 'constants/storage';
import { selectApp } from 'features';
import { useApi, useAppSelector } from 'hooks';
import { useCallback, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getStored } from 'utils';

const LayoutAuth = () => {
  const navigate = useNavigate();
  const app = useAppSelector(selectApp);
  const { onCallWithCatchError } = useApi();

  const onValidate = useCallback(async () => {
    const token = getStored(STORE_KEYS.AUTH);

    if (token) {
      await onCallWithCatchError(async () => {
        const me = await fetchMe();
        if (me) {
          navigate(ROUTE_PATHS.MERCHANT.SELF);
        }
      });
    }
  }, []);

  useEffect(() => {
    onValidate();
  }, [onValidate]);

  return (
    <div className="min-h-screen bg-gray-15-8 pt-[25px]">
      <div className="container max-w-[1170px]">
        <div className="flex flex-col gap-[66px]">
          <div className="flex items-center justify-between gap-3">
            <img src={Logo} alt="" />
          </div>

          <div className="flex items-center justify-center md:justify-between">
            {app.width > 767 && (
              <div className="flex flex-col gap-[52px]">
                <div className="text-3xl lg:text-[2rem] lg:leading-[48px] text-black-2">
                  <p className="">Song hành phút giây</p>
                  <p className="">
                    Thanh toán <b>Bytepay</b>
                  </p>
                </div>
                <img src={Illustration} alt="" />
              </div>
            )}

            <div className="shrink-0 py-2 sm:py-7 px-3 sm:px-10 w-full max-w-[400px] bg-white rounded-lg">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
