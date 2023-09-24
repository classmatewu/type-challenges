// 关于用 unknown 还是 any，两者都可表示任意类型，但用 any 则会关闭 ts 的类型校验，而 unknown 则还会类型推断，继续进行 ts 校验
// 所以应该尽量用 unknown 代替 any

type Push<T extends unknown[], U> = [...T, U]
