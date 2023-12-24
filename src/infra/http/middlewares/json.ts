import { type RequestHandler, json } from "express"

export default function (): RequestHandler {
  return json()
}
