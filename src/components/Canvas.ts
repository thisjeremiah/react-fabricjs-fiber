import { fabric } from 'fabric'

export default class Canvas {
  canvas: fabric.Canvas

  constructor() {
    this.canvas = new fabric.Canvas('c')
  }
}
