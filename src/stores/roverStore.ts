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

interface PhotoSummary {
    sol: number;
    earth_date: string;
    total_photos: number;
    cameras: string[];
}

interface Manifest {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    photos: PhotoSummary[];
}

export const useRoverStore = defineStore('rover', () => {
    const photos = ref<RoverPhoto[]>([]);
    const manifest = ref<Manifest>({
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3742,
        max_date: "2023-02-14",
        total_photos: 631505,
        photos: []
    }
    );
    const manifest_loading = ref<boolean>(false)
    const manifest_err = ref<boolean>(false)
    const photos_loading = ref<boolean>(false);
    const photos_err = ref<boolean>(false);
    const photoIndex = ref<number>(0);

    const setManifest = (rover: string):void => {};
    const setPhotos = (rover: string, date: string, cameras: string|undefined) => {};
    const setIndex = (photoIndex: number) => {};

    return {photos, manifest, manifest_loading, manifest_err, photos_loading, photos_err, photoIndex, setManifest, setPhotos, setIndex};
})