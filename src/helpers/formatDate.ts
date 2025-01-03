export function formatDate(isDate: string | undefined) {
  if (isDate) {
    return new Date(isDate).toLocaleString("pt-BR");
  }

  return isDate;
}
