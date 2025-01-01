export function colorStatus(status: string): string {
  switch (status.toLowerCase()) {
    case "aprovado":
      return "text-emerald-500";
    case "em analise":
      return "text-yellow-500";
    case "recusado":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
}
