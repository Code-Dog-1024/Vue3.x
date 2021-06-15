/**
 * 数字添加分隔符并保留两位小数
 *
 * @param {number | string} value
 * @returns {string} `1,000.00`
 */
export const formatNumber = (value: number | string): string => {
  const arr = String(value).split(".");
  const intPartArr = arr[0].split("").reverse();
  const floatPartArr = arr[1] ? arr[1].split("") : [];

  if (intPartArr.length > 3) {
    const commaNum = Math.floor(intPartArr.length / 3);
    for (let index = 0; index < commaNum; index++) {
      intPartArr.splice(4 * index + 3, 0, ",");
    }
  }
  intPartArr.reverse();
  if (intPartArr[0] === ",") {
    intPartArr.splice(0, 1);
  }
  const intPart = intPartArr.join("");

  let floatPart;
  switch (floatPartArr.length) {
    case 0:
      floatPart = "00";
      break;
    case 1:
      floatPart = `${floatPartArr[0]}0`;
      break;
    default:
      floatPart = `${floatPartArr[0]}${floatPartArr[1]}`;
      break;
  }

  return `${intPart}.${floatPart}`;
};
