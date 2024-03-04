import { NullException } from '../exception/null.exception';

export class Optional<T> {
  private constructor(private readonly data: T | null) {}

  static of<T>(data: T | null) {
    return new Optional(data);
  }

  public getOrThrow(err: Error): T {
    if (this.isPresent()) return this.data as T;
    else throw err;
  }

  public orElse(other: T): T {
    if (this.isPresent()) return this.data;
    else return other;
  }

  public get(): T {
    return this.getOrThrow(new NullException());
  }

  public isPresent(): boolean {
    return this.data != null;
  }
}
