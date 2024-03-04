export class Duration {
  private readonly ms: number;

  constructor(value: number) {
    this.ms = value;
  }

  static ofDays(days: number): Duration {
    return new Duration(days * 24 * 60 * 60 * 1000);
  }

  static ofHours(hours: number): Duration {
    return new Duration(hours * 60 * 60 * 1000);
  }

  static ofMinutes(minutes: number): Duration {
    return new Duration(minutes * 60 * 1000);
  }

  static ofSeconds(seconds: number): Duration {
    return new Duration(seconds * 1000);
  }

  static ofMilliSeconds(milliSeconds: number): Duration {
    return new Duration(milliSeconds);
  }

  static between(d1: Date, d2: Date): Duration {
    return new Duration(Math.abs(+d1 - +d2));
  }

  getValue(): number {
    return this.ms;
  }

  getInMilliSeconds(): number {
    return this.ms;
  }

  getInSeconds(): number {
    return Math.floor(this.ms / 1000);
  }

  getInMinutes(): number {
    return Math.floor(this.ms / (1000 * 60));
  }

  getInHours(): number {
    return Math.floor(this.ms / (1000 * 60 * 60));
  }

  getInDays(): number {
    return Math.floor(this.ms / (1000 * 60 * 60 * 24));
  }

  addTo(d: Date): Date {
    const n = new Date(d);
    n.setMilliseconds(n.getMilliseconds() + this.ms);
    return n;
  }

  removeFrom(d: Date): Date {
    const n = new Date(d);
    n.setMilliseconds(n.getMilliseconds() - this.ms);
    return n;
  }

  equals(other: unknown): boolean {
    return other instanceof Duration && this.ms === other.ms;
  }
}
