export const formatNum = (num, lang = "ru", styled = "decimal") =>
  new Intl.NumberFormat(lang, { style: styled }).format(Math.round(num));
