import { getResponseMetadata } from '@/app'

describe('app', () => {
  it('getResponseMetadata', () => {
    expect(getResponseMetadata()).toEqual({ responseType: 'error', responseCode: 1 })
  })
})
