import { forwardRef } from 'react';
import { cn } from 'utils';

type Props = {
  tag?: React.ElementType;
  badged?: boolean;
  clickable?: boolean;
  icon: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const Icon = forwardRef<HTMLElement, Props>(
  (
    {
      className,
      tag: Wrapper = 'span',
      badged,
      clickable,
      icon,
      disabled,
      ...props
    },
    $ref,
  ) => {
    return (
      <Wrapper
        className={cn(
          'icon',
          badged && 'badged',
          !disabled && clickable && 'cursor-pointer select-none',
          className,
        )}
        ref={$ref}
        disabled={disabled}
        {...props}
      >
        {icon}
      </Wrapper>
    );
  },
);

type IconProps = {} & React.HTMLProps<SVGSVGElement>;

export const ChevronDown: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.58976 7.08976C6.26434 7.41517 5.73667 7.41517 5.41126 7.08976L0.697206 2.37567C0.371765 2.05027 0.371765 1.52264 0.697206 1.1972C1.02264 0.871767 1.55028 0.871767 1.87571 1.1972L6.00051 5.32201L10.1253 1.1972C10.4508 0.871767 10.9783 0.871767 11.3038 1.1972C11.6293 1.52264 11.6293 2.05027 11.3038 2.37567L6.58976 7.08976Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Times: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const Spinner: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Search: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_901_44154)">
        <path
          d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20L16 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_901_44154">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowLeft: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_908_30405)">
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L9 16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L9 8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_908_30405">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowRight: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_908_8440)">
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16L19 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8L19 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_908_8440">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Check: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export const Plus: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_918_1476)">
        <path
          d="M12 6.03516V18.0352"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12.0352H18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_918_1476">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.0351562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeOff: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_18_1834)">
        <path
          d="M3 3L21 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.584 10.5879C10.2087 10.9629 9.99775 11.4716 9.99756 12.0022C9.99737 12.5327 10.2079 13.0416 10.583 13.4169C10.958 13.7922 11.4667 14.0031 11.9973 14.0033C12.5278 14.0035 13.0367 13.7929 13.412 13.4179"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881L9.363 5.36506Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_1834">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Eye: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_908_7007)">
        <path
          d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_908_7007">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Upload: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="31"
      height="22"
      viewBox="0 0 31 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.75 10.3712L12.1019 13.0106C11.9664 13.151 11.7969 13.2212 11.5935 13.2212C11.3901 13.2212 11.2154 13.1481 11.0692 13.0019C10.9096 12.8615 10.8346 12.6846 10.8442 12.4712C10.8539 12.2577 10.9289 12.0808 11.0692 11.9404L14.6519 8.35768C14.8942 8.11538 15.1769 7.99423 15.5 7.99423C15.8231 7.99423 16.1058 8.11538 16.3481 8.35768L19.9308 11.9404C20.0711 12.0808 20.1476 12.2552 20.1601 12.4637C20.1726 12.6723 20.0962 12.8524 19.9308 13.004C19.7904 13.143 19.6149 13.2091 19.4043 13.2024C19.1937 13.1957 19.0154 13.1221 18.8692 12.9817L16.25 10.3712V19.0769C16.25 19.3077 16.3462 19.5192 16.5385 19.7115C16.7308 19.9039 16.9423 20 17.1731 20H25.25C26.3 20 27.1875 19.6375 27.9125 18.9125C28.6375 18.1875 29 17.3 29 16.25C29 15.2 28.6375 14.3125 27.9125 13.5875C27.1875 12.8625 26.3 12.5 25.25 12.5H23V9.5C23 7.425 22.2688 5.65625 20.8063 4.19375C19.3438 2.73125 17.575 2 15.5 2C13.425 2 11.6562 2.73125 10.1938 4.19375C8.73125 5.65625 8 7.425 8 9.5H7.19233C5.8 9.5 4.58654 10.0125 3.55194 11.0375C2.51731 12.0625 2 13.3 2 14.75C2 16.2 2.5125 17.4375 3.5375 18.4625C4.5625 19.4875 5.8 20 7.25 20H10.25C10.4625 20 10.6406 20.072 10.7844 20.2159C10.9281 20.3599 11 20.5382 11 20.751C11 20.9638 10.9281 21.1418 10.7844 21.2851C10.6406 21.4284 10.4625 21.5 10.25 21.5H7.25C5.37885 21.5 3.78606 20.8493 2.47164 19.5479C1.15721 18.2464 0.5 16.6558 0.5 14.776C0.5 12.999 1.11154 11.4586 2.33461 10.1548C3.55769 8.85096 4.99423 8.15 6.64423 8.0519C6.98077 5.8673 7.98559 4.0625 9.65866 2.6375C11.3317 1.2125 13.2789 0.5 15.5 0.5C18.0072 0.5 20.1339 1.37321 21.8804 3.11964C23.6268 4.86606 24.5 6.99285 24.5 9.5V11H25.4231C26.8596 11.0462 28.0649 11.5736 29.039 12.5822C30.013 13.5908 30.5 14.8135 30.5 16.25C30.5 17.7212 30.0024 18.9639 29.0072 19.9784C28.012 20.9928 26.7789 21.5 25.3077 21.5H17.1731C16.4827 21.5 15.9063 21.2688 15.4438 20.8063C14.9813 20.3438 14.75 19.7673 14.75 19.0769V10.3712Z"
        fill="currentColor"
      />
    </svg>
  );
};
