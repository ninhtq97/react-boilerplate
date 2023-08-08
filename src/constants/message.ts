export const MSG = {
  MERCHANT: {
    CONTRACT: {
      EXTENSION: 'Gia hạn hợp đồng thành công',
    },
  },
  NOTIFICATION: {
    CREATE: 'Tạo thông báo thành công',
    UPDATE: 'Cập nhật thông báo thành công',
    DELETE: 'Xóa thông báo thành công',
  },
};

export const ERROR_MSG = {
  REQUIRED: 'Đây là trường bắt buộc',
  EMAIL: 'Email không hợp lệ',
  PASSWORD:
    'Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự trường hợp đặc biệt',
  CONFIRM_PASSWORD: 'Mật khẩu không trùng khớp',
  MAX_LENGTH: 'Độ dài tối đa {length} ký tự',
  TRIM: 'Chuỗi ký tự có khoảng trống ở đầu và cuối',
  NOT_WHITESPACE: 'Chuỗi ký tự không bao gôm khoảng trống',
  ARRAY_NOT_EMPTY: 'Danh sách không thể để trống',
  NUMBER: '{property} phải là một số',
  MIN: 'Giá trị phải lớn hơn hoặc bằng {value}',
  MAX: 'Giá trị phải nhỏ hơn hoặc bằng {value}',
};

export const ERROR_CODE = {
  1000: 'Hệ thống xảy ra lỗi. Vui lòng thử lại sau !!!',
  1001: 'Ngân hàng không hỗ trợ.',
  1002: 'Chữ ký không hợp lệ.',
  1003: 'Đối tác không tồn tại.',
  1006: 'Giao dịch không tồn tại hoặc thất bại',
  1007: 'Mã hoàn tiền đã tồn tại',
  1008: 'Phương thức thanh toán không tồn tại',
  1009: 'Kết nối đối tác thất bại',
  1010: 'Mã đơn hàng đã tồn tại',
  2012: 'Thông tin đăng nhập không chính xác',
  2013: 'Tài khoản của bạn không thể truy cập vào hệ thống',
  2014: 'Mật khẩu không trùng khớp',
  2015: 'Email đã được sử dụng hoặc không tồn tại',
  2016: 'Đường dẫn đã hết hạn. Vui lòng thử lại',
  2017: 'Đường dẫn truy cập không hợp lệ',
  2018: 'Tên đăng nhập đã tồn tại',
  2019: 'Email đã tồn tại',
  2020: 'Số điện thoại đã tồn tại',
  2021: 'Đối tác đã đăng ký doanh nghiệp',
  2022: 'Giấy chứng nhận doanh nghiệp cho phép tối đa 5 tệp',
  2023: 'Ngân hàng đã chọn không có trong danh sách',
  2024: 'Không thể xóa tài khoản này',
  2025: 'Thông báo không tồn tại',
};
