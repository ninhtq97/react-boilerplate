import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import Icon from 'components/Icon';
import { MIME_TYPE } from 'constants/upload';
import { useApi } from 'hooks';
import { forwardRef, useCallback, useEffect, useState } from 'react';

type Props = {
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  value?: string;
  merchantId?: string;
  onChange?: (...event: any[]) => void;
};

const InputFile = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      placeholder,
      disabled,
      error,
      helperText,
      value,
      merchantId,
      onChange: onChangeProps,
    },
    $ref,
  ) => {
    const { onCallWithCatchError } = useApi();

    const [base64, setBase64] = useState('');

    const fetchStream = useCallback(async () => {
      if (value && merchantId) {
        // const res = await fetchStreamFile(merchantId, 'manager', value);
        // previewFile(res);
      }
    }, [merchantId, value]);

    useEffect(() => {
      fetchStream();
    }, [fetchStream]);

    const previewFile = (blob: File | Blob) => {
      const reader = new FileReader();

      reader.onloadend = (e) => {
        const { result } = e.target!;

        if (result) {
          setBase64(result.toString());
        }
      };

      reader.readAsDataURL(blob);
    };

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.currentTarget.files?.[0];

      if (value && merchantId) {
        onCallWithCatchError(async () => {
          // await deleteUpload(merchantId, value);
        });
      }

      if (file) {
        const isValid = file.type.match(MIME_TYPE);

        if (onChangeProps && isValid && merchantId) {
          onCallWithCatchError(async () => {
            // const filename = await managerUpload(merchantId, file);
            // onChangeProps(filename);
          });
        } else {
          setBase64('');
        }
      }
    };

    return (
      <div className={`form-file${disabled ? ' disabled' : ''}`}>
        {label && <span className="label-file">{label}</span>}
        <label
          className={`file-container ${className || ''} ${
            error ? '!border-rose-500 text-rose-500' : 'text-black-2'
          }`}
        >
          {!disabled && (
            <div className={`file-field`}>
              <Icon
                className={`items-center justify-center border rounded bg-opacity-10 p-1 max-w-[32px] max-h-8 ${
                  error
                    ? 'border-rose-500 bg-rose-500 text-rose-500'
                    : 'border-green-0 bg-green-0 text-green-0'
                }`}
                icon={<Plus />}
              />

              <input
                type="file"
                className="ipt-file"
                ref={$ref}
                onChange={onChange}
              />

              {placeholder && (
                <span className="placeholder-file">{placeholder}</span>
              )}
            </div>
          )}

          {base64 && (
            <div className="file-preview">
              <img className="preview-img" src={base64} alt="" />
            </div>
          )}
        </label>
        {error && <p className="text-xs text-rose-500 ml-2">{helperText}</p>}
      </div>
    );
  },
);

export default InputFile;
