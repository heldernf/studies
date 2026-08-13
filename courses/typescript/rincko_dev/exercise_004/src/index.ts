// Tuplas

type NameList = string[]

type CalendarDate = [day: number, month: number, year: number]

const list: NameList = []
list.push('heldernf')

const date: CalendarDate = [29, 12, 2005]

function createDate(date: CalendarDate) {
  const [day, month, year] = date
  console.log(day, month, year)
}

createDate(date)
