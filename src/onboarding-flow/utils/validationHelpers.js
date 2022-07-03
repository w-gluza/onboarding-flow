/* eslint-disable no-useless-escape */
export const URL =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

export const US_ZIP = /(^\d{5}$)|(^\d{5}-\d{4}$)/

export default { URL, US_ZIP };
