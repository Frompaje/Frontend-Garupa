export function formatMoney(money: number) {
  const { format } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return format(money);
}
