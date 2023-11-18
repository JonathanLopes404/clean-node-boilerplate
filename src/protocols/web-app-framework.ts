export default interface WebAppFramework {
  listen(port: number, callback?: () => void): void
  addMiddleware(middleware: any): void
}
