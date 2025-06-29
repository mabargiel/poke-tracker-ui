export interface ListResponse<T> {
  pagination: Pagination
  items: T[]
}

export interface Pagination {
  pageSize: number
  pageNumber: number
  totalItems: number
  totalPages: number
}

export interface QueryParams {
  page_size?: number
  page_number?: number
  filter?: string
  sort?: string
}
