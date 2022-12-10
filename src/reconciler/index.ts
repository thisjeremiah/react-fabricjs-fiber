import { createElement, getHostContextNode } from '../utils/createElement'
import Reconciler from 'react-reconciler'

const emptyObject = Object.freeze({})

const CanvasRenderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child)
    }
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props)
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text
  },

  finalizeInitialChildren(wordElement, type, props) {
    return false
  },

  getPublicInstance(inst) {
    return inst
  },

  prepareForCommit() {
    // noop
    return null
  },

  prepareUpdate(wordElement, type, oldProps, newProps) {
    return true
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(wordElement) {
    // noop
  },

  getRootHostContext(instance) {
    return getHostContextNode(instance)
  },

  getChildHostContext(instance) {
    return emptyObject
  },

  shouldSetTextContent(type, props) {
    return false
  },

  // @ts-ignore
  now: () => {},

  useSyncScheduling: true,

  supportsMutation: false,
})

export default CanvasRenderer
