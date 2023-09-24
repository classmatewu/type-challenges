type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

// 将 js 数组元素提取成为 ts 元组类型：
// const arr = [1, 2, 3] as const
// 注意 typeof Array 的 Array 得是 readonly 描述的元组类型，否则无法提取字面量类型，所以前面 arr 要用 as const
// type Tuple = typeof arr // readonly [1, 2, 3]

// const arr = [1, 2, 3] as const
// type Tuple = typeof arr // number

// 将元组类型转为联合类型
// type Union = Tuple[number]
