type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// in Union 用于循环联合类型
// keyof Object 用于提取 Object 类型的 key 为联合类型

// Union1 extends Union2 不会触发联合类型可分散，因为这是约束
// Union1 extends Union2 ? true : false 条件类型时，左边的 Union1 才会触发联合类型可分散

