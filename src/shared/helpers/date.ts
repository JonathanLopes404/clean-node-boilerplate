import InvalidDateError from "@shared/errors/invalid-date-error"
import { format } from "date-fns"

export function formatDate(
  date: Date,
  outputFormat: string = "yyyy-MM-dd"
): string {
  return format(date, outputFormat)
}

export function isValidDate(dateString: string): boolean {
  const regex =
    /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/

  return regex.test(dateString)
}

export function convertStringToDate(dateString: string): Date {
  if (!isValidDate(dateString)) {
    throw new InvalidDateError("Data inválida")
  }

  const [year, month, day] = dateString
    .split("-")
    .map((number) => parseInt(number))

  return new Date(year, month - 1, day)
}
