export const DataRole = [
  { value: 0, label: 'Chủ cửa hàng' },
  { value: 1, label: 'Nhân Viên Quản Lí' },
  { value: 2, label: 'Nhân Viên Bán Hàng' },
  { value: 3, label: 'Nhân Viên IT' },
  { value: 4, label: 'Nhân Viên Tiếp Thị' },
  { value: 5, label: 'Nhân Viên Kế Toán' },
  { value: 6, label: 'Nhân Viên Pháp Lý' },
  { value: 7, label: 'Nhân Viên Hỗ Trợ' },
  { value: 8, label: 'Nhân Viên Kho' },
  { value: 9, label: 'Nhân Viên Bảo Vệ' },
  { value: 10, label: 'Nhân Viên Thử Việc' },
  { value: 11, label: 'Người Dùng' }
];




export const imageStaffLevel = [
  { value: 0, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034720/Boss_pukaxj.png' },
  { value: 1, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731057050/laolang_jljhqn.png' },
  { value: 2, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034726/hang2_jnucif.png' },
  { value: 3, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034725/hang3_gtgheu.png' },
  { value: 4, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034726/hang1_uv6dcs.png' },
  { value: 5, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034720/5year_flnse0.png' },
  { value: 6, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034719/4-5year_whzi45.png' },
  { value: 7, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034719/1year_xmnffl.png' },
  { value: 8, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034719/2-4year_qdloen.png' },
  { value: 9, label: 'https://res.cloudinary.com/dcvkmhlhw/image/upload/v1731034719/-1year_x8oqsg.png' }
];

export const StaffGender = [
  { value: 0, label: 'Nam' },
  { value: 1, label: 'Nữ' },
  { value: 2, label: 'Khác' },

];


export interface StaffInterface {
  user_name: string,
  user_email: string,
  user_password: string,
  user_address: string,
  user_phone: string,
  user_role: number,
  level: number,
  user_gender: number | null,
  user_birth: string,
  user_time: string,
  user_image: string,


}


export interface DataStaffInterface {
  staffData: StaffInterface,
  tokenStaff:string
}
