export function convertToNumber(value: string | number): number {
  // Kiểm tra nếu giá trị là số, nếu vậy thì trả về giá trị số đó
  if (typeof value === 'number') {
    return value;
  }

  // Nếu giá trị là chuỗi, loại bỏ dấu phẩy và chuyển thành số
  const cleanedValue = value.replace(/,/g, '');
  return parseFloat(cleanedValue); // Chuyển chuỗi đã được làm sạch thành số
}
