export const toggleAccordion = () => {
  const accordions = document.querySelectorAll('.js-accordion')
  if (!accordions) return

  Array.prototype.slice.call(accordions).forEach(accordion => {
    const accordionHeader = accordion.querySelector('.js-accordion__header')

    accordionHeader.addEventListener('click', () => {
      getSiblings(accordion).map(item => {
        item.classList.remove('is-active')
      })
      accordion.classList.toggle('is-active')
    })
  })
}

const getSiblings = element => {
  // Setup siblings array and get the first sibling
  let siblings = []
  let sibling = element.parentNode.firstChild

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }

  return siblings
}
