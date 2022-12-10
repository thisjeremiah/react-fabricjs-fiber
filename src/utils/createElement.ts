import { Canvas, Circle } from '../components'

let ROOT_NODE_INSTANCE: Canvas | null = null

export function getHostContextNode(rootNode: any) {
  if (typeof rootNode !== undefined) {
    return (ROOT_NODE_INSTANCE = rootNode)
  } else {
    console.warn(`${rootNode} is not an instance of fabric.Canvas constructor.`)

    return (ROOT_NODE_INSTANCE = new Canvas())
  }
}

// Creates an element with an element type, props and a root instance
export function createElement(type: unknown, props?: any) {
  const COMPONENTS = {
    ROOT: () => new Canvas(),
    CIRCLE: () => new Circle(ROOT_NODE_INSTANCE!, props),
    default: undefined,
  }

  // @ts-ignore
  return COMPONENTS[type]() || COMPONENTS.default
}
