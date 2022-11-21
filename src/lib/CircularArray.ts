export class CircularArray<T> {
  constructor(private items: T[] | readonly T[]) {}
  get(index: number): T {
    if (index >= 0) {
      return this.items[index % this.items.length];
    } else {
      return this.items[
        this.items.length - (-index % this.items.length || this.items.length)
      ];
    }
  }

  map<S>(fn: (i: T) => S): CircularArray<S> {
    return new CircularArray(this.items.map(fn));
  }

  toArray(): T[] {
    return this.items.slice();
  }
}
