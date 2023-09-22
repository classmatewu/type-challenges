// 当联合类型出现在条件语句左边时，则触发联合类型可分散，类似循环联合类型
type MyExclude<T, U> = T extends U ? never : T
