export const paginateArray = (array, perPage, page) => array.slice((page - 1) * perPage, page * perPage)

// pagination meta
export const paginationMeta = computed(() => {
  return (options, total) => {
    const start = (options.page - 1) * options.itemsPerPage + 1
    const end = Math.min(options.page * options.itemsPerPage, total)
    
    return `A mostrar ${start} a ${end} de ${total} resultados`
  }
})
export const genId = array => {
  const { length } = array
  let lastIndex = 0
  if (length)
    lastIndex = Number(array[length - 1]?.id) + 1
  
  return lastIndex || (length + 1)
}
