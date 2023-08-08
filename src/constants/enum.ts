export enum TxType {
  BANK = 'bank',
  QR = 'qr',
}

export enum TxStatus {
  PENDING = 'pending',
  CANCEL = 'cancel',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export const TxStatusView = {
  [TxStatus.PENDING]: 'Chờ xử lý',
  [TxStatus.SUCCESS]: 'Thành công',
  [TxStatus.FAIL]: 'Thất bại',
  [TxStatus.CANCEL]: 'Hủy',
};

export const TxStatusToVariant = {
  [TxStatus.PENDING]: 'warning',
  [TxStatus.SUCCESS]: 'success',
  [TxStatus.FAIL]: 'error',
  [TxStatus.CANCEL]: 'secondary',
};

export enum TxRefundStatus {
  PENDING = 'pending',
  CANCEL = 'cancel',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  FAIL = 'fail',
}

export const TxRefundStatusView = {
  [TxRefundStatus.PENDING]: 'Chờ duyệt',
  [TxRefundStatus.SUCCESS]: 'Đã hoàn tiền',
  [TxRefundStatus.PROCESSING]: 'Chờ xử lý',
  [TxRefundStatus.FAIL]: 'Thất bại',
  [TxRefundStatus.CANCEL]: 'Hủy',
};

export const TxRefundStatusToVariant = {
  [TxRefundStatus.PENDING]: 'warning',
  [TxRefundStatus.SUCCESS]: 'primary',
  [TxRefundStatus.FAIL]: 'error',
  [TxRefundStatus.CANCEL]: 'secondary',
  [TxRefundStatus.PROCESSING]: 'indigo',
};

export enum TxSource {
  NINEPAY = '9pay',
  APPOTAPAY = 'appotapay',
  CAKE = 'cake',
}

export enum InventoryType {
  UNPROCESS = 'unprocess',
  HISTORY = 'history',
}

export enum KycStatus {
  NO_INFO = 'no_info',
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

export const KycStatusView = {
  [KycStatus.VERIFIED]: 'Đã xác thực',
  [KycStatus.REJECTED]: 'Từ chối xác thực',
  [KycStatus.PENDING]: 'Chờ xác thực',
  [KycStatus.NO_INFO]: 'Chưa xác thực',
};

export const KycStatusToVariant = {
  [KycStatus.VERIFIED]: 'success',
  [KycStatus.REJECTED]: 'error',
  [KycStatus.PENDING]: 'warning',
  [KycStatus.NO_INFO]: 'secondary',
};

export enum PaymentMethod {
  ATM = 'ATM',
  CC = 'CC',
  EWALLET = 'EWALLET',
}

export const PaymentMethodView = {
  [PaymentMethod.ATM]: 'Thẻ nội địa',
  [PaymentMethod.CC]: 'Thẻ quốc tế',
  [PaymentMethod.EWALLET]: 'Ví điện tử',
};

export enum TradeType {
  DISPARATE = 'for-control',
  PAYMENT_GATEWAY = 'paymentGw',
  REFUND = 'refund',
  WITHDRAW = 'withdraw',
}

export const TradeTypeView = {
  [TradeType.DISPARATE]: 'Đối soát thanh toán',
  [TradeType.PAYMENT_GATEWAY]: 'Cổng thanh toán',
  [TradeType.REFUND]: 'Hoàn tiền',
  [TradeType.WITHDRAW]: 'Rút tiền',
};

export enum NotificationVia {
  SMS = 'sms',
  EMAIL = 'email',
  SYSTEM = 'system',
}

export const NotificationViaView = {
  [NotificationVia.SMS]: 'SMS',
  [NotificationVia.EMAIL]: 'Email',
  [NotificationVia.SYSTEM]: 'Hệ thống',
};

export enum NotificationStatus {
  NEW = 'new',
  READ = 'read',
  DELETE = 'delete',
}

export const NotificationStatusView = {
  [NotificationStatus.NEW]: 'Chưa xem',
  [NotificationStatus.READ]: 'Đã xem',
  [NotificationStatus.DELETE]: '',
};

export enum BalanceType {
  PAYMENTGW = 'paymentGw',
  WITHDRAW = 'withdraw',
  REFUND = 'refund',
  FORCONTROL = 'for-control',
}

export const BalanceTypeView = {
  [BalanceType.PAYMENTGW]: 'Cổng thanh toán',
  [BalanceType.WITHDRAW]: 'Rút tiền',
  [BalanceType.REFUND]: 'Hoàn tiền',
  [BalanceType.FORCONTROL]: 'Đối soát thanh toán',
};

export enum ActivityStatus {
  ACTIVE = 1,
  LOCK = 0,
}

export const ActivityStatusView = {
  [ActivityStatus.ACTIVE]: 'Đang hoạt động',
  [ActivityStatus.LOCK]: 'Khóa',
};

export const ActivityStatusToVariant = {
  [ActivityStatus.ACTIVE]: 'success',
  [ActivityStatus.LOCK]: 'error',
};

export enum CRUD {
  READ = 'view',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export const CRUDView = {
  [CRUD.READ]: 'Xem',
  [CRUD.CREATE]: 'Thêm',
  [CRUD.UPDATE]: 'Sửa',
  [CRUD.DELETE]: 'Xóa',
};

export enum ContractType {
  NEW = 'new',
  EXTENSION = 'extension',
}

export const ContractTypeView = {
  [ContractType.NEW]: 'Cấp mới',
  [ContractType.EXTENSION]: 'Gia hạn',
};

export const ContractTypeToVariant = {
  [ContractType.NEW]: 'primary',
  [ContractType.EXTENSION]: 'warning',
};

export enum ContractFilterBy {
  SIGN_DATE = 'sign-date',
  END_DATE = 'end-date',
}

export const ContractFilterByView = {
  [ContractFilterBy.SIGN_DATE]: 'Ngày ký',
  [ContractFilterBy.END_DATE]: 'Ngày kết thúc',
};
