import { MIME_TYPE } from 'constants/common';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { TAttachment } from 'types';
import { cn } from 'utils';
import { Icon, Times, Upload } from '../Icon';

type Props = {
  label?: string;
  placeholder?: string;
  preview?: TAttachment[];
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  maxFiles?: number;
  value?: File[];
  onChange?: (files: File[]) => void;
  onRemove?: (...args) => void;
} & Omit<React.InputHTMLAttributes<HTMLElement>, 'value' | 'onChange'>;

const InputFile = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      placeholder,
      preview,
      disabled,
      error,
      helperText,
      maxFiles = 1,
      value,
      onChange: propsOnChange,
      onRemove: propsOnRemove,
      ...props
    },
    $ref,
  ) => {
    const $file = useRef<HTMLInputElement | null>(null);

    const [base64, setBase64] = useState<TAttachment[]>([]);

    const displayUrls = preview ? [...preview, ...base64] : base64;

    const previewFile = (files: File[]) => {
      const displayUrls = Object.values(files || {}).map((e) => ({
        name: e.name,
        path: URL.createObjectURL(e),
      }));

      setBase64(displayUrls);
    };

    useEffect(() => {
      previewFile(value || []);
    }, [value]);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        console.log([
          ...(value || []),
          ...Object.values(files).slice(0, maxFiles - displayUrls.length),
        ]);

        propsOnChange?.([
          ...(value || []),
          ...Object.values(files).slice(0, maxFiles - displayUrls.length),
        ]);
      }
    };

    return (
      <div
        className={cn(
          'form-file',
          disabled && 'disabled',
          error ? 'has-error' : '',
        )}
      >
        {label && <span className="file-label">{label}</span>}
        <div className="file-container">
          {displayUrls.length > 0 &&
            displayUrls.map((e, i) => (
              <div className={cn('file-preview', className)} key={i}>
                {(e.path.startsWith('blob:') &&
                  MIME_TYPE.IMG.includes(`image/${e.name.split('.').pop()}`)) ||
                MIME_TYPE.IMG.includes(`image/${e.path.split('.').pop()}`) ? (
                  <>
                    <img
                      className="preview-img"
                      src={
                        e.path.startsWith('blob:')
                          ? e.path
                          : `${process.env.REACT_APP_API_URL}/${e.path}`
                      }
                      alt=""
                    />
                  </>
                ) : (
                  <a
                    className="preview-file"
                    href={
                      e.path.startsWith('blob:')
                        ? e.path
                        : `${process.env.REACT_APP_API_URL}/${e.path}`
                    }
                    target="__blank"
                  >
                    <span className="block w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {e.name}
                    </span>
                  </a>
                )}

                {!disabled && (
                  <Icon
                    className="absolute right-0 top-0 z-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-bl-lg rounded-tr-lg bg-rose-500 text-white"
                    icon={<Times className="h-3 w-3" />}
                    onClick={() => {
                      if ($file.current && $file.current.value) {
                        $file.current.value = '';
                      }

                      e.path.startsWith('blob:') || base64.length > 0
                        ? value &&
                          propsOnChange?.([
                            ...value.slice(0, preview ? i - preview.length : i),
                            ...value.slice(
                              (preview ? i - preview.length : i) + 1,
                            ),
                          ])
                        : preview && propsOnRemove?.(preview[i].path);
                    }}
                  />
                )}
              </div>
            ))}

          {!disabled && displayUrls.length < maxFiles && (
            <label className={cn('file-field', className)}>
              <Icon className="items-center justify-center" icon={<Upload />} />

              <input
                type="file"
                className="ipt-file"
                ref={
                  typeof $ref === 'function'
                    ? (current) => {
                        $ref(current as typeof $file.current);
                        $file.current = current as typeof $file.current;
                      }
                    : (($ref || $file) as React.RefObject<HTMLInputElement>)
                }
                onChange={onChange}
                {...props}
              />

              {placeholder && (
                <span className="file-placeholder">{placeholder}</span>
              )}
            </label>
          )}
        </div>
        {error && <p className="ml-2 text-xs text-rose-500">{helperText}</p>}
      </div>
    );
  },
);

export default InputFile;
