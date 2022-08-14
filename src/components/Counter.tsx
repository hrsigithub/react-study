import React, { useState } from 'react'
import { createModuleResolutionCache } from 'typescript'

function init() {
  // 時間のかかる処理
  for (let i = 1; i < 30000; i++) {
    console.log(i)
  }
  console.error('初期化 OK.')
  return 7
}

const Counter = () => {
  // init() は再描画するたびに走る。
  // const [counter, setCounter] = useState(init())

  // 以下にすると、一度だけ初期化
  const [counter, setCounter] = useState(() => {
    return init()
  })

  return (
    <div>
      Hooks 学習 useSate
      <div>
        <button
          onClick={(e) => {
            // 以下　バグ
            // setCounter(counter + 1)
            // setCounter(counter + 1)

            // 以下　OK
            setCounter((pre) => pre + 1)
            setCounter((pre) => pre + 1)
          }}
        >
          {counter}
        </button>
      </div>
    </div>
  )
}

export default Counter

