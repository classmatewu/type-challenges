import type { Equal, Expect } from '@type-challenges/utils'

const tuple = [1] as const

// const tuple2 = [1]

// type Test = typeof tuple

// type Test2 = typeof tuple2

// type Test3 = Test[number]

// type Test4 = Test2[number]

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>
