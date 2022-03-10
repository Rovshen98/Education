import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    eventsData: [{
            id: 1,
            imgSrc: "/images/tangier.jpeg",
            title: "Turkish Universities Fair in Tangier - Morocco",
            date: "26 Mar, 2022 ",
            hours: "11:00 -",
            minutes: " 18:00 ",
            city: "Tangier",
        },
        {
            id: 2,
            imgSrc: "/images/casablanca-flyer.png",
            title: "Turkish Universities Fair in Casablanca - Morocco",
            date: "27 Mar, 2022 ",
            hours: "11:00 -",
            minutes: " 18:00 ",
            city: "Casablanca",
        },
        {
            id: 3,
            imgSrc: "/images/baku-en_0 (1).png",
            title: "Turkish Universities Fair in Baku - Azerbaijan",
            date: "03 Apr, 2022 ",
            hours: "11:00 -",
            minutes: " 18:00 ",
            city: "Baku",
        },
        {
            id: 4,
            imgSrc: "/images/taskent-en.png",
            title: "Turkish Universities Fair in Tashkent - Uzbekistan",
            date: "07 May, 2022 ",
            hours: "11:00 -",
            minutes: " 18:00 ",
            city: "Tashkent",
        },
        {
            id: 5,
            imgSrc: "/images/koln-en.png",
            title: "Turkish Universities Fair in Köln - Germany",
            date: "15 May, 2022 ",
            hours: "11:00 -",
            minutes: " 18:00 ",
            city: "Köln",
        }
    ]
}

export const eventsSlice = createSlice({
    name: "events",
    initialState: state,
    reducers: {

    }
})

export const selectEvents = (state) => state.events.events;

export default eventsSlice.reducer;