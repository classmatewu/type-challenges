// 解法1
// 通过 infer 定义局部变量
// type First<T extends any[]> = T extends [infer P, ...infer _Rest] ? P : never

// 解法2
// 类似操作数组的方式，利用下标获取元组元素
// 通过 T extends [] 判断是否是空元组
// type First<T extends any[]> = T extends [] ? never : T[0]

// 解法3
// 与解法2类似，但通过 T['length] extends 0 判断是不是空元组
type First<T extends any[]> = T['length] extends 0 ? never : T[0]
