// Если название этой функции поменяется, необходимо внести изменения в suggestionInput.vue

export const addressSuggestions = async (query: string) => {
    console.log(useRuntimeConfig().public.pizzeriaLocation.lat)
    const suggestionResponse = await fetch(useRuntimeConfig().public.addressSuggestionUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${useRuntimeConfig().public.apiToken}`
        },
        body: JSON.stringify({
            query: query,
            locations_geo: [{
                lat: useRuntimeConfig().public.pizzeriaLocation.lat,
                lon: useRuntimeConfig().public.pizzeriaLocation.lon,
                radius_meters: useRuntimeConfig().public.pizzeriaLocation.radius_meters
                }]
        })
    })
    if (!suggestionResponse.ok) {
        console.log('Похоже, у нас что-то сломалось, зайдите попозже.')
        console.log(suggestionResponse)
    }
    return await suggestionResponse.json();
}
