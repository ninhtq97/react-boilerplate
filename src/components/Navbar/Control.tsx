import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import Icon from 'components/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import { Props as NavItemProps } from './Item';

type Props = {
  tag: 'div' | 'link';
  isActive?: boolean;
  onClick?: () => void;
};

const NavControl: React.FC<Props & NavItemProps> = ({
  tag,
  item,
  isActive,
  onClick,
}) => {
  const location = useLocation();

  return (
    <NavControlWrapper
      tag={tag}
      to={item.url}
      className={`nav__control${
        item.url && location.pathname.match(new RegExp(`${item.url}`))?.length
          ? ' active'
          : ''
      }`}
      onClick={onClick}
    >
      <div className="nav__left">
        <Icon className="nav__icon" icon={item.icon} />
        <p className="nav__title">{item.name}</p>
      </div>
      {item.children.length > 0 && (
        <div className="nav__right">
          <Icon
            className={`nav__icon ${isActive ? 'rotate-180' : ''}`}
            icon={<ChevronDown />}
          />
        </div>
      )}
    </NavControlWrapper>
  );
};

const NavControlWrapper: React.FC<
  { className: string; to: string } & React.PropsWithChildren & Props
> = ({ tag, to, children, ...props }) => {
  const mapTag = {
    div: <div {...props}>{children}</div>,
    link: (
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    ),
  };

  return mapTag[tag];
};

export default NavControl;
