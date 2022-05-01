import { Vector3 } from "three/src/math/Vector3";

export interface Machine {
    _id: string;
    name: string;
    imageUrl: string;
    modelUrl: string;
    modelPosition: Vector3;
    modelScale: Vector3;
}