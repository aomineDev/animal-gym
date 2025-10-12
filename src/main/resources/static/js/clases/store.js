export const claseList = claseListRaw.reduce((acc, curr) => {
  acc[curr.claseId] = curr

  return acc
}, {})
