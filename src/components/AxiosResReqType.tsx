import React, { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import user from '../user.json' // レスポンスのJSON(詳しくは補足で)
const url = 'https://jsonplaceholder.typicode.com'

type USER = typeof user // 画面に表示するユーザー情報の型

const options: AxiosRequestConfig = {
  url: `${url}/users`,
  method: 'GET',
}

const AxiosResReqType = () => {
  const [users, setUsers] = useState<USER[]>([])
  const [status, setStatus] = useState<number | null>(null)

  //API通信を行う箇所
  useEffect(() => {
    axios(options)
      .then((res: AxiosResponse<USER[]>) => {
        const { data, status } = res
        setUsers(data)
        setStatus(status)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        console.log(e.message)
      })
  }, [])

  return (
    <div>
      <h1>Axiosのリクエストとレスポンスに型をつける</h1>
      <h2>ステータス:{status}</h2>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              {id} : {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AxiosResReqType
