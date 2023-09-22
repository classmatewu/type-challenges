type Length<T extends readonly any[]> = T['length']

// 解法2
// length 其实就是 object 类型的一个字段值
// type Length<T extends readonly any[]> = T extends { length: infer L }  ?  L : never;
