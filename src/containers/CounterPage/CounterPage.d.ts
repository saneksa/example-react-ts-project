export interface ICounterPageProps {
  count: number;
  increment: (val: number) => void;
  decrement: (val: number) => void;
}
export interface ICounterPageState {}

interface ICount {
  count: number;
}

export interface IStoreCounter {
  counter: ICount;
}
