import { ReactComponent as Bell } from 'assets/icons/bell.svg';
import { ReactComponent as Bubble } from 'assets/icons/bubble.svg';
import { ReactComponent as Cash } from 'assets/icons/cash.svg';
import { ReactComponent as Cog } from 'assets/icons/cog.svg';
import { ReactComponent as FileText } from 'assets/icons/file-text.svg';
import { ReactComponent as Gauge } from 'assets/icons/gauge.svg';
import { ReactComponent as ReportMoney } from 'assets/icons/report-money.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import Logo from 'assets/images/logo.png';
import SidebarIllustration from 'assets/images/sidebar-illustration.png';
import NavAccount from 'components/Navbar/Account';
import NavItem from 'components/Navbar/Item';
import { ROUTE_PATHS } from 'constants/route';
import { Link } from 'react-router-dom';

type Props = {} & React.HTMLProps<HTMLElement>;

export const SIDEBARS = [
  {
    icon: <Gauge />,
    url: ROUTE_PATHS.OVERVIEW,
    name: 'Tổng quan',
    children: [],
  },
  {
    icon: <User />,
    url: ROUTE_PATHS.MERCHANT.SELF,
    name: 'Quản lý Merchant',
    children: [
      { url: ROUTE_PATHS.MERCHANT.SELF, name: 'Danh sách Merchant' },
      { url: ROUTE_PATHS.MERCHANT.CONTRACT.SELF, name: 'Danh sách hợp đồng' },
    ],
  },
  {
    icon: <Cash />,
    url: ROUTE_PATHS.TX.SELF,
    name: 'Quản lý giao dịch',
    children: [
      { url: ROUTE_PATHS.TX.SELF, name: 'Danh sách giao dịch' },
      { url: ROUTE_PATHS.TX.REFUND, name: 'Giao dịch hoàn trả' },
      {
        url: ROUTE_PATHS.TX.DISPARATE.SELF,
        name: 'Giao dịch lệch đối soát',
      },
    ],
  },
  {
    icon: <Bubble />,
    url: ROUTE_PATHS.CATEGORY.SELF,
    name: 'Quản lý danh mục',
    children: [
      { url: ROUTE_PATHS.CATEGORY.BANK, name: 'Ngân hàng' },
      {
        url: ROUTE_PATHS.CATEGORY.BUSINESS_TYPE,
        name: 'Loại hình doanh nghiệp',
      },
    ],
  },
  {
    icon: <Bell />,
    url: ROUTE_PATHS.NOTIFICATION,
    name: 'Quản lý thông báo',
    children: [],
  },
  {
    icon: <FileText />,
    url: ROUTE_PATHS.REPORT.SELF,
    name: 'Quản lý báo cáo',
    children: [
      { url: ROUTE_PATHS.REPORT.MERCHANT, name: 'Báo cáo theo Merchant' },
      { url: ROUTE_PATHS.REPORT.PARTNER, name: 'Báo cáo theo Đối tác' },
    ],
  },
  {
    icon: <ReportMoney />,
    url: ROUTE_PATHS.ACCOUNTANT.SELF,
    name: 'Kế toán',
    children: [
      { url: ROUTE_PATHS.ACCOUNTANT.REFUND, name: 'Xử lý hoàn tiền' },
      {
        url: ROUTE_PATHS.ACCOUNTANT.PARTNER_CROSS_CHECK,
        name: 'QL đối soát - Đối tác',
      },
      {
        url: ROUTE_PATHS.ACCOUNTANT.MERCHANT_CROSS_CHECK,
        name: 'QL đối soát - Merchant',
      },
    ],
  },
  {
    icon: <Cog />,
    url: ROUTE_PATHS.SETTING.SELF,
    name: 'Cài đặt',
    children: [
      {
        url: ROUTE_PATHS.SETTING.DATE_CROSS_CHECK.SELF,
        name: 'Cấu hình ngày đối soát',
      },
      { url: ROUTE_PATHS.SETTING.FEE, name: 'Cấu hình phí' },
      {
        url: ROUTE_PATHS.SETTING.PAYMENT_METHOD.SELF,
        name: 'Phương thức thanh toán',
      },
      { url: ROUTE_PATHS.SETTING.DECENTRALIZATION.SELF, name: 'Phân quyền' },
      { url: ROUTE_PATHS.SETTING.ACCOUNT, name: 'Tài khoản' },
    ],
  },
];

const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`sidebar ${className || ''}`}>
      <div className="flex-1">
        <div className="flex max-h-[60px] mb-3">
          <Link className="flex" to={ROUTE_PATHS.HOME}>
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="sidebar__nav">
          <div className="sidebar__item sidebar__top">
            {/* Profile */}
            <NavAccount />
          </div>

          <div className="border-b border-dashed"></div>

          <div className="sidebar__item sidebar__bot">
            {SIDEBARS.map((e, i) => (
              <NavItem item={e} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative -mb-4">
          <img src={SidebarIllustration} alt="" />
        </div>

        <div className="flex bg-gray-15-2 rounded px-[9px] pb-[18px] pt-7 text-gray-8 text-[10px] text-center">
          © 2021 - Bản quyền thuộc về Công ty CP Bytesoft Việt Nam
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
