import { ReactComponent as EyeOff } from 'assets/icons/eye-off.svg';
import { ReactComponent as Eye } from 'assets/icons/eye.svg';
import { forwardRef, useState } from 'react';
import Input from '.';

type Props = {} & React.ComponentProps<typeof Input>;

const InputPassword = forwardRef<HTMLInputElement, Props>((props, $ref) => {
  const [hide, setHide] = useState(true);
  const onToggleHide = () => setHide(!hide);

  return (
    <Input
      type={hide ? 'password' : 'text'}
      {...props}
      ref={$ref}
      iconPosition={props.iconPosition || 'end'}
      icon={
        props.icon || hide ? (
          <Eye className="cursor-pointer fill-none" onClick={onToggleHide} />
        ) : (
          <EyeOff className="cursor-pointer fill-none" onClick={onToggleHide} />
        )
      }
    />
  );
});

export default InputPassword;
