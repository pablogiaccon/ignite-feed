import { format } from "date-fns";

export function formatDate(date: Date): string {
  return format(date, "d 'of' LLLL 'at' HH:mm'h'");
}
