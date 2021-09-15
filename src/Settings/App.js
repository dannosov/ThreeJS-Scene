import * as THREE from 'three'
import Renderer from "./Renderer";


export default class App {
    constructor(rootElement) {
        this.rootElement = rootElement
        this.canvas = new Renderer()
        this.init()
    }

    /**
     * Append Canvas to DOM
     */
    setCanvas(){
        this.rootElement.appendChild(this.canvas.render.domElement)
    }

    /**
     * Init Project
     */
    init(){
        this.setCanvas()
    }

}