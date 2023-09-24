// typeof 后面只能接 js 变量，而不能接 ts 变量，因为是把变量转换为类型
// const test = 1
// type Test = typeof test

// const test = [1, 2, 3] as const
// type Test = typeof test

// 解法1
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// 无法覆盖全部样例，主要是因为 U extends P 是判断 U 是不是 P 的子集，无法判断是否完全相等
// 例如 false extends boolean 也是 true

// <Includes<[boolean, 2, 3, 5, 6, 7], false> -> expect false, but get true
// <Includes<[{}, 2, 3, 5, 6, 7], { a: 1 }> -> expect false, but get true

// 改进一下
// type IsEqual<T, U> = T extends U ? (U extends T ? true : false) : false
// 会漏掉 { a: 'A' }, { readonly a: 'A' } （修饰符不相等）的情况，也把它们误判为 true
// IsEqual<true, boolean> 也会返回 boolean (true | false) 的情况，因为触发了联合类型可分散
// IsEqual<{ a: 'A' }, { readonly a: 'A' }> // true
// IsEqual<true, boolean> // boolean

// 再改进版，避免触发联合类型可分散
// type IsEqual<A, B> = [A, B] extends [B, A] ? true : false
// 但没解决修饰符比较问题

// 终版
// 利用的是条件类型对于函数泛型参数<...>的可分配性规格：若条件类型左边是函数泛型参数，则要求 extends 右边的类型完全相等
// @see https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
type IsEqual<P, K> =
  (<T>() => T extends P ? 1 : 2) extends
  (<T>() => T extends K ? 1 : 2) ? true : false

// 解法2
// 递归地跟元组的每一个元素进行完全相等比较
type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
    ? IsEqual<U, First> extends true // 递归地跟元组的每一项做完全相等比较
      ? true // 找到有完全相等的，则返回true
      : Includes<Rest, U> // 否则递归，接着比较从元组剩余的元素里面找
    : false
