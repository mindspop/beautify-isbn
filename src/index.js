const range = {
  '0': [
    ['00', '19'],
    ['200', '227'],
    ['2280', '2289'],
    ['229', '647'],
    ['6480000', '6489999'],
    ['649', '699'],
    ['7000', '8499'],
    ['85000', '89999'],
    ['900000', '949999'],
    ['9500000', '9999999'],
  ],
  '1': [
    ['00', '09'],
    ['100', '399'],
    ['4000', '5499'],
    ['55000', '73199'],
    ['7320000', '7399999'],
    ['74000', '77499'],
    ['7750000', '7753999'],
    ['77540', '86979'],
    ['869800', '972999'],
    ['9730', '9877'],
    ['987800', '998999'],
    ['9990000', '9999999'],
  ],
}

const regex = /^(978|979|)(\d{1})(\d{8})([\dX])$/

export const validate = (isbn) => {
  const rawIsbn = deformat(isbn)
  return regex.test(rawIsbn)
}

export const format = (isbn) => {
  if (isbn.match(regex)) {
    if (isbn.length === 13) return `${RegExp.$1}-${RegExp.$2}-${RegExp.$3}-${RegExp.$4}`
    if (isbn.length === 10) return `${RegExp.$2}-${RegExp.$3}-${RegExp.$4}`
  }
  return isbn
}

export const deformat = (i_s_b_n) => {
  return i_s_b_n.split('-').join('')
}
