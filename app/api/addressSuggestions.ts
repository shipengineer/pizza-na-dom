export const addressSuggestions = async (query: string) => {
    const suggestionResponse = await fetch(useRuntimeConfig().public.addressSuggestionUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${useRuntimeConfig().public.apiToken}`
        },
        body: JSON.stringify({query: query })
    })
    if (!suggestionResponse.ok) {
        console.log('Похоже, у нас что-то сломалось, зайдите попозже.')
        console.log(suggestionResponse)
    }
    return await suggestionResponse.json();
}
