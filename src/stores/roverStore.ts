import {defineStore} from 'pinia'
import {ref} from 'vue'

interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

interface RoverPhoto {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export const useRoverStore = defineStore('rover', () => {
    const photos = ref<RoverPhoto[]>([]);

    return {photos};
})