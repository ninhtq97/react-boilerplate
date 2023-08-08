import { useCallback } from 'react';
import Swal, { SweetAlertIcon } from 'sweetalert2';

const useToast = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const onFire = useCallback(
    async (
      variant: SweetAlertIcon = 'info',
      title?: string | HTMLElement | JQuery,
    ) => {
      Toast.fire({ icon: variant, title: title });
    },
    [Toast],
  );

  return { onFire };
};

export default useToast;
