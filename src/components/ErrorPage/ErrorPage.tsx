import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

type Props = {
  error?: FetchBaseQueryError | SerializedError
}

export const ErrorPage = ({ error }: Props) => {
  return <p>ERROR: {error?.toString()}</p>
}
