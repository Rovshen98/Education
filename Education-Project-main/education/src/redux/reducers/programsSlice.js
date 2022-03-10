import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    programsData: [
        {
            id: 1,
            logo: "/images/program_logo.jpeg",
            subtitle: "Altinbas University",
            city: "Istanbul",
            title: "Strategic Marketing and Brand Management (Without Thesis)",
            actions: [{
                    id: 1,
                    text: "Master",
                    icon: "fa-solid fa-award"
                },
                {
                    id: 2,
                    text: "Private",
                    icon: "fa-solid fa-house-chimney"
                },
                {
                    id: 3,
                    text: "Turkish",
                    icon: "fa-solid fa-comment-dots"
                },
                {
                    id: 4,
                    text: "2 Year",
                    icon: "fa-solid fa-calendar-days"
                }
            ],
            price: "3450"
        },
        {
            id: 2,
            logo: "/images/program_logo2.jpg",
            subtitle: "Istanbul Bilgi University",
            city: "Istanbul",
            title: "Trauma and Disaster Mental Health (With Thesis)",
            actions: [{
                    id: 1,
                    text: "Master",
                    icon: "fa-solid fa-award"
                },
                {
                    id: 2,
                    text: "Private",
                    icon: "fa-solid fa-house-chimney"
                },
                {
                    id: 3,
                    text: "Turkish",
                    icon: "fa-solid fa-comment-dots"
                },
                {
                    id: 4,
                    text: "2 Year",
                    icon: "fa-solid fa-calendar-days"
                }
            ],
            price: "3300"
        }
    ]
}

export const programsSlice = createSlice({
    name:"programs",
    initialState:state,
    reducers:{

    }
})

export const selectPrograms = (state) => state.programs.programsData;

export default programsSlice.reducer;