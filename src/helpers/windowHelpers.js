export const getContainerRenderWindow = (container) => {
  const document = container.ownerDocument

  return document.defaultView || document.parentWindow
}
