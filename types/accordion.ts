export interface AccordionItem {
  id: string | number
  title: string
  content?: string
  icon?: string
}

export interface AccordionProps {
  items: AccordionItem[]
  name?: string
  joinItems?: boolean
  arrowIcon?: boolean
  plusIcon?: boolean
}

