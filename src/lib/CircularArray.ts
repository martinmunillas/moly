export class CircularArray<T> extends Array<T> {
  constructor(items: T[] | readonly T[]) {
    super(...items);
  }
  get(index: number): T {
    if (index >= 0) {
      return this[index % this.length];
    } else {
      return this[this.length - (-index % this.length || this.length)];
    }
  }

  toArray(): T[] {
    return this.slice();
  }
}

export type CircularArrayItem<T> = T extends CircularArray<infer U> ? U : never;
