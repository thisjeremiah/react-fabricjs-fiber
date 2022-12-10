import { createElement } from './utils/createElement'
import CanvasRenderer from './reconciler'

export default function render(element: any) {
  const container = createElement('ROOT')

  const node = CanvasRenderer.createContainer(container)

  CanvasRenderer.updateContainer(element, node, null)

  return container
}
