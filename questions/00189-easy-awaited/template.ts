// 解法1
// 由于 Promise<T> 嵌套几层不确定，对于这种长度不确定的，基本就是用递归
// 再根据 test-case 兼容下 then function 形式
// type MyAwaited<T extends Promise<unknown> | { then: (onfulfilled: (arg: unknown) => unknown) => unknown }> = T extends Promise<infer P>
//   ? MyAwaited<P>
//   : T extends { then: (onfulfilled: (arg: infer U) => any) => any }
//     ? U
//     : T

// 为了复用，也可进一步将 { then: (onfulfilled: (arg: unknown) => any) => any } 进行定义提取
// type Thenable<T> = {
//   then: (onfulfilled: (arg: T) => unknown) => unknown
// }

// 解法二
// 使用原生的 PromiseLike
// 为了解决 @ts-expect-error，因此加上范型约束
type MyAwaited<T extends PromiseLike<unknown>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<unknown>
    ? MyAwaited<U>
    : U
  : never
