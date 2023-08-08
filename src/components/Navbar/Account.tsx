import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import DefaultAvatar from 'assets/images/default-avatar.png';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import Typography from 'components/Typography';
import { ROUTE_PATHS } from 'constants/route';
import { STORE_KEYS } from 'constants/storage';
import { resetAuth, selectMe } from 'features';
import { Variants, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeStored } from 'utils';
import ChangePassword from './ChangePassword';

const variants: Variants = {
  open: { opacity: 1, scaleY: 1, height: 'auto' },
  closed: { opacity: 0, scaleY: 0, height: 0 },
};

const NavAccount = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const me = useAppSelector(selectMe);

  const [isActive, setIsActive] = useState(true);

  const onToggleDropdown = () => setIsActive(!isActive);

  const onSignOut = () => {
    removeStored(STORE_KEYS.AUTH);
    dispatch(resetAuth());
    navigate(ROUTE_PATHS.AUTH.SIGN_IN);
  };

  return (
    <div className={`nav__item ${isActive ? 'active' : ''}`}>
      <div
        className={`nav__control ${isActive ? ' active' : ''}`}
        onClick={onToggleDropdown}
      >
        <div className="nav__left">
          <img src={DefaultAvatar} alt="" />
          <p className="nav__title font-medium">{me?.name}</p>
        </div>
        <div className="nav__right">
          <Icon
            className={`nav__icon ${isActive ? 'rotate-180' : ''}`}
            icon={<ChevronDown />}
          />
        </div>
      </div>
      <motion.div
        className="nav__dropdown"
        animate={isActive ? 'open' : 'closed'}
        variants={variants}
      >
        <Modal
          width={400}
          renderLink={({ onOpen }) => (
            <div className="dropdown__link" onClick={onOpen}>
              <Typography>Đổi mật khẩu</Typography>
            </div>
          )}
          renderHeader={() => (
            <h4 className="font-medium text-xl">Đổi mật khẩu</h4>
          )}
          renderContent={({ onClose }) => (
            <ChangePassword onSignOut={onSignOut} onClose={onClose} />
          )}
        />
        <div className="dropdown__link" onClick={onSignOut}>
          <Typography>Đăng xuất</Typography>
        </div>
      </motion.div>
    </div>
  );
};

export default NavAccount;
