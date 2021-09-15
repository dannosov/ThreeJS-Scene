import * as THREE from "three";

export default class Renderer {
    constructor() {
        this.render = new THREE.WebGLRenderer()
    }
}