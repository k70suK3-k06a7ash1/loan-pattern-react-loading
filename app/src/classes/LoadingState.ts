export class LoadingState implements Disposable {
    constructor(private setLoading: (loading: boolean) => void) {
      this.setLoading(true);
    }
  
    [Symbol.dispose]() {
      this.setLoading(false);
    }
  }