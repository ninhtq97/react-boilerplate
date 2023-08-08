import { recursiveRoutes } from 'utils';

export const API_PREFIX = '/api/';

export const API_ROUTES = {
  AUTH: {
    SELF: 'auth',
    SIGN_IN: 'sign-in',
    CHANGE_PASSWORD: 'change-password',
  },
  ACCOUNT: {
    SELF: 'account',
    ME: 'me',
    ONE: '{id}',
  },
  DASHBOARD: {
    SELF: 'dashboard',
    CHART: 'chart',
  },
  MERCHANT: {
    SELF: 'merchant',
    ONE: {
      SELF: '{merchantId}',
      VERIFY: 'verify-kyc',
      REJECT: 'reject-kyc',
      ACTIVE: 'active',
    },
  },
  CONTRACT: {
    SELF: 'merchant-contract',
    ONE: '{id}',
  },
  FEE: {
    SELF: 'setting-fee',
    ONE: '{id}',
    HISTORY: {
      SELF: 'history',
      ONE: '{id}',
    },
    DEFAULT: {
      SELF: 'default',
      HISTORY: 'history',
    },
  },
  FILE: {
    SELF: 'file',
    FETCH: '{merchantId}/{key}/{filename}',
    MANAGER: 'manager-upload/{merchantId}',
    DELETE: '{merchantId}/{filename}',
  },
  BANK: {
    SELF: 'bank',
    ONE: '{id}',
  },
  SEGMENT_ENTERPRISE: {
    SELF: 'segment-enterprise',
    ONE: '{id}',
  },
  BALANCE: {
    SELF: 'balance',
    INFO: '{id}/info',
  },
  NOTIFICATION: {
    SELF: 'notification',
    ONE: '{id}',
  },
  TX: {
    SELF: 'tx',
    REFUND: {
      SELF: 'refund',
      REJECT: 'reject',
      APPROVE: '{id}/approve',
    },
    DISPARATE: 'checkTx',
    ONE: '{id}',
  },
  ROLE: {
    SELF: 'role',
    ONE: '{id}',
  },
  PERMISSION: {
    SELF: 'permission',
  },
  PAYMENT_METHOD: {
    SELF: 'payment-method',
    LIST_DEFAULT: 'list-default',
    DEFAULT: {
      SELF: 'default',
      ONE: '{id}',
    },
    MERCHANT: {
      SELF: 'merchants',
      LIST: 'list',
      ONE: '{merchantId}',
      CONFIG: {
        SELF: 'config',
        ONE: '{merchantId}',
      },
    },
  },
};

recursiveRoutes(API_ROUTES, API_PREFIX);
