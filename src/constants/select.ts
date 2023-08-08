import { Option } from 'components/Select';
import {
  ActivityStatus,
  ActivityStatusView,
  ContractFilterBy,
  ContractFilterByView,
  ContractType,
  ContractTypeView,
  KycStatus,
  KycStatusView,
  NotificationVia,
  NotificationViaView,
  PaymentMethod,
  PaymentMethodView,
  TradeType,
  TradeTypeView,
  TxRefundStatus,
  TxRefundStatusView,
  TxSource,
  TxStatus,
  TxStatusView,
} from './enum';

export const TX_STATUS_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  { label: TxStatusView[TxStatus.SUCCESS], value: TxStatus.SUCCESS },
  { label: TxStatusView[TxStatus.PENDING], value: TxStatus.PENDING },
  { label: TxStatusView[TxStatus.FAIL], value: TxStatus.FAIL },
  { label: TxStatusView[TxStatus.CANCEL], value: TxStatus.CANCEL },
];

export const TX_REFUND_STATUS_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  {
    label: TxRefundStatusView[TxRefundStatus.SUCCESS],
    value: TxRefundStatus.SUCCESS,
  },
  {
    label: TxRefundStatusView[TxRefundStatus.PROCESSING],
    value: TxRefundStatus.PROCESSING,
  },
  {
    label: TxRefundStatusView[TxRefundStatus.PENDING],
    value: TxRefundStatus.PENDING,
  },
  {
    label: TxRefundStatusView[TxRefundStatus.FAIL],
    value: TxRefundStatus.FAIL,
  },
  {
    label: TxRefundStatusView[TxRefundStatus.CANCEL],
    value: TxRefundStatus.CANCEL,
  },
];

export const PAYMENT_METHOD_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  { label: PaymentMethodView[PaymentMethod.ATM], value: PaymentMethod.ATM },
  { label: PaymentMethodView[PaymentMethod.CC], value: PaymentMethod.CC },
  {
    label: PaymentMethodView[PaymentMethod.EWALLET],
    value: PaymentMethod.EWALLET,
  },
];

export const TX_TYPE_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  { label: TradeTypeView[TradeType.DISPARATE], value: TradeType.DISPARATE },
  {
    label: TradeTypeView[TradeType.PAYMENT_GATEWAY],
    value: TradeType.PAYMENT_GATEWAY,
  },
  { label: TradeTypeView[TradeType.REFUND], value: TradeType.REFUND },
];

export const TX_SOURCE_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  { label: 'Appota', value: TxSource.APPOTAPAY },
  { label: '9Pay', value: TxSource.NINEPAY },
];

export const KYC_TX_STATUS_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  { label: KycStatusView[KycStatus.VERIFIED], value: KycStatus.VERIFIED },
  { label: KycStatusView[KycStatus.REJECTED], value: KycStatus.REJECTED },
  { label: KycStatusView[KycStatus.PENDING], value: KycStatus.PENDING },
  { label: KycStatusView[KycStatus.NO_INFO], value: KycStatus.NO_INFO },
];

export const ACTIVITY_STATUS_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  {
    label: ActivityStatusView[ActivityStatus.ACTIVE],
    value: ActivityStatus.ACTIVE,
  },
  {
    label: ActivityStatusView[ActivityStatus.LOCK],
    value: ActivityStatus.LOCK,
  },
];

export const TIME_OPTIONS: Option[] = Array.from(Array(24).keys()).flatMap(
  (hour) => {
    return Array.from(Array(60 / 5).keys()).map((minute) => {
      let formattedHour = hour.toString().padStart(2, '0');
      let formattedMinute = (minute * 5).toString().padStart(2, '0');

      const time = `${formattedHour}:${formattedMinute}`;

      return { label: time, value: time };
    });
  },
);

export const CONTRACT_TYPE_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  {
    label: ContractTypeView[ContractType.NEW],
    value: ContractType.NEW,
  },
  {
    label: ContractTypeView[ContractType.EXTENSION],
    value: ContractType.EXTENSION,
  },
];

export const CONTRACT_FILTER_BY_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  {
    label: ContractFilterByView[ContractFilterBy.SIGN_DATE],
    value: ContractFilterBy.SIGN_DATE,
  },
  {
    label: ContractFilterByView[ContractFilterBy.END_DATE],
    value: ContractFilterBy.END_DATE,
  },
];

export const NOTIFICATION_VIA_OPTIONS: Option[] = [
  { label: 'Tất cả', value: '' },
  {
    label: NotificationViaView[NotificationVia.EMAIL],
    value: NotificationVia.EMAIL,
  },
  {
    label: NotificationViaView[NotificationVia.SMS],
    value: NotificationVia.SMS,
  },
  {
    label: NotificationViaView[NotificationVia.SYSTEM],
    value: NotificationVia.SYSTEM,
  },
];
