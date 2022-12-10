import type { fabric } from 'fabric'
import type Canvas from './Canvas'

export default class Circle {
  root: Canvas
  props: any

  constructor(root: Canvas, props: any) {
    this.root = root
    this.props = props
  }

  appendChild(child: fabric.Circle) {
    this.root.canvas.add(child)
  }
}
