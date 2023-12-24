export default interface ApplicationFramework {
  run: (callback?: () => void) => Promise<void>
  close: () => void
}
