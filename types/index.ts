export interface Product {
  id: number
  name: string
  slug: string
  description: string
  images: string[]
  features: string[]
  cataloguePdf: string
}

export interface Partner {
  id: number
  name: string
  logo: string
  description: string
}

export interface CompanyData {
  name: string
  tagline: string
  description: string
  mission: string
  vision: string
  values: Array<{
    title: string
    description: string
  }>
  contact: {
    address: string
    phone: string
    email: string
    hours: string
  }
  social: {
    linkedin: string
    twitter: string
    facebook: string
    instagram: string
  }
}
