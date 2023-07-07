import { ResponseCode, ResponseType } from "@/types"

export const getResponseMetadata = (): { responseType: ResponseType, responseCode: ResponseCode } => {
  const responseType: ResponseType = 'error'
  const responseCode: ResponseCode = 1
  
  return { responseType, responseCode }
}
