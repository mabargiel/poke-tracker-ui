export interface ListResponse<T> {
  pagination: {
    pageSize: number
    pageNumber: number
    totalItems: number
    totalPages: number
  }
  items: T[]
}

export interface QueryParams {
  page_size?: number
  page_number?: number
  filter?: string
  sort?: string
}
