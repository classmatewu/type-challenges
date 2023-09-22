type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
