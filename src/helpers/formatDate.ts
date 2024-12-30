export function formatDate(isoDate: any) {
  const date = new Date(isoDate).toLocaleString("pt-BR");

  return date;
}
