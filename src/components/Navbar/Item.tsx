import { SIDEBARS } from 'components/Sidebar';
import Typography from 'components/Typography';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavControl from './Control';

export type Props = {
  item: typeof SIDEBARS[0];
};

const variants: Variants = {
  open: { opacity: 1, scaleY: 1, height: 'auto' },
  closed: { opacity: 0, scaleY: 0, height: 0 },
};

const NavItem: React.FC<Props> = ({ item }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(
    !!location.pathname.match(new RegExp(`${item.url}`))?.length,
  );

  const onToggleDropdown = () => setIsActive(!isActive);

  return (
    <div
      className={`nav__item ${
        (item.url &&
          location.pathname.match(new RegExp(`${item.url}`))?.length) ||
        isActive
          ? 'active'
          : ''
      }`}
    >
      {item.children.length > 0 ? (
        <NavControl
          tag="div"
          item={item}
          isActive={isActive}
          onClick={onToggleDropdown}
        />
      ) : (
        <NavControl tag="link" item={item} />
      )}

      {item.children.length > 0 && (
        <motion.div
          className="nav__dropdown"
          animate={isActive ? 'open' : 'closed'}
          variants={variants}
        >
          {item.children?.map((e, i) => (
            <NavLink to={e.url} end className="dropdown__link" key={i}>
              <Typography>{e.name}</Typography>
            </NavLink>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavItem;
