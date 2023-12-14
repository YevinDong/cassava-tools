import AppScheme from "../AppScheme/index.svelte"
import Homepage from "../Homepage/index.svelte"
import Time from "../Time/index.svelte"
const routes = {
    "/": Homepage,
    "/scheme": AppScheme,
    "/time":Time
}

export default routes;