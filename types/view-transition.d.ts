interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

interface Document {
  startViewTransition(
    setupPromise: () => Promise<unknown> | void,
  ): ViewTransition;
}
