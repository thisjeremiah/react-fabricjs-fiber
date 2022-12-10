import { createElement } from '../utils/createElement'
import CanvasRenderer from '../reconciler'

async function render(element: any, filePath: any) {
  // Create root container instance
  const container = createElement('ROOT')

  // Returns the current fiber (flushed fiber)
  const node = CanvasRenderer.createContainer(container)

  // Schedules a top level update with current fiber and a priority level (depending upon the context)
  CanvasRenderer.updateContainer(element, node, null)

  // CanvasRenderer.injectIntoDevTools({
  //   bundleType: 1,
  //   version: '0.1.0',
  //   rendererPackageName: 'react-fabricjs-fiber',
  //   findHostInstanceByFiber: CanvasRenderer.findHostInstance
  // })

  await new Promise((resolve, reject) => {
    // TODO
    resolve(true)
  })
}

export default render
