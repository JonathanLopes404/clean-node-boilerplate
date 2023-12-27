export default class Id {
  constructor(private readonly value: string | number) {}

  toString(): string {
    return this.value.toString()
  }

  toNumber(): number {
    return Number(this.value)
  }
}
