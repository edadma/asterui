// Safelist for Tailwind classes in object maps that the scanner misses
// This file is scanned by Tailwind to ensure these classes are included

export const safelist = `
  flex flex-row flex-col flex-wrap flex-shrink-0 flex-1 shrink-0
  gap-1 gap-2 gap-4 gap-6 gap-8
  items-start items-end items-center items-baseline items-stretch
  justify-start justify-end justify-center justify-between justify-around justify-evenly
  p-1 p-2 p-3 p-4 p-6 p-8 py-4 px-1
  m-1 m-2 m-4 mt-1 mt-2 mt-4 mb-1 mb-2 mb-4 mx-2 mx-4 mx-6 my-2 my-4 -mx-6 -mb-6
  w-full w-8 w-12 w-24 w-48 h-full h-1.5 h-6 h-8 h-10 h-12 h-24 min-w-0 max-w-full
  text-sm text-xs text-lg text-xl text-2xl text-3xl text-center
  font-mono font-semibold font-bold
  rounded rounded-lg rounded-full
  overflow-hidden overflow-auto overflow-x-auto
  relative absolute inset-0 top-1 right-1
  truncate whitespace-pre
  border border-2 border-t border-dashed border-base-300 border-base-content/10 border-base-content/20
  bg-base-100 bg-base-200 bg-base-300 bg-base-300/80 bg-primary/5 bg-error/10
  text-base-content text-base-content/40 text-base-content/60 text-base-content/70
  text-primary text-error text-success
  opacity-50 cursor-pointer cursor-not-allowed
  transition-all transition-colors
  space-y-2 object-cover grid grid-cols-2
`
