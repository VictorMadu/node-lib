import { NullException } from '../exception/null-exception';

export class OptionalAsync<T> {
  private constructor(private readonly data: Promise<T | null>) {}

  static of<T>(data: Promise<T | null>) {
    return new OptionalAsync(data);
  }

  public async orElse(other: T | Promise<T>): Promise<T> {
    if (await this.isPresent()) return this.data;
    else return other;
  }

  public async orThrow(err: unknown): Promise<T> {
    if (await this.isPresent()) return this.data as T;
    else throw err;
  }

  public async get(): Promise<T> {
    if (await this.isPresent()) return this.data as T;
    else throw new NullException();
  }

  public async isPresent(): Promise<boolean> {
    return (await this.data) != null;
  }
}
