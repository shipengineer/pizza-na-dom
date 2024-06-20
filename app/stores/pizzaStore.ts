export const usePizzaStore = defineStore('pizzaStore', () => {
    const pizzaCards: Array<IPizza> = [
        {
            id: "1",
            name: "Манго",
            description: "Томатный соус, моцарелла, творожный сыр, пюре манго, руккола.",
            image: "https://optim.tildacdn.com/stor3137-3066-4533-b638-666639636363/-/resize/312x/-/format/webp/11848312.jpg",
            sizes: [
                {
                    title: "25",
                    value: 25
                }
            ],
            prices: [485],
            toppings: ["моцаррела", "пепперони", " черри", "бекон"]
        },
        {
            id: "2",
            name: "XXXX-самая острая пицца в городе",
            description: "Сливочный соус, моцарелла, соус на основе острых перцев Каролина Рипер, Тринидадский Скорпион и Призрак, начос, курица и груша",
            image: "https://optim.tildacdn.com/stor3137-3066-4533-b638-666639636363/-/resize/312x/-/format/webp/11848312.jpg",
            sizes: [
                {
                    title: "25",
                    value: 25
                },
                {
                    title: "30",
                    value: 30
                },
                {
                    title: "35",
                    value: 35
                }],
            prices: [485, 715, 895],
            toppings: ["моцаррела", "пепперони", " черри", "бекон"]
        },
        {
            id: "3",
            name: "Терияки пицца",
            description: "Сливочный соус, моцарелла, нежное куриное филе, свежие шампиньоны, прованские травы, кунжут и соус Терияки.",
            image: "https://optim.tildacdn.com/stor3137-3066-4533-b638-666639636363/-/resize/312x/-/format/webp/11848312.jpg",
            sizes: [
                {
                    title: "25",
                    value: 25
                },
                {
                    title: "30",
                    value: 30
                },
                {
                    title: "35",
                    value: 35
                }],
            prices: [485, 715, 895],
            toppings: ["моцаррела", "пепперони", " черри", "бекон"]
        },
    ]

    return { pizzaCards }
})
