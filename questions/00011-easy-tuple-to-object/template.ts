type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// T[number] 可将 Tuple 转为联合类型

// T 的子项约束成 string | number | symbol，是因为在 typescript 中只有这三项才能做 object key
// 在原生 javascript 中则只有 string | symbol 可以作为 object key，number 作为 key 也只会被转为 string
