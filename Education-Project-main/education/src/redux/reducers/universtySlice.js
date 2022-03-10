import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    universtyData: [{
            id: 1,
            logo: "/images/beu-logo-en9a912ddd82774c598e29ea1340e4586a.png",
            title: "Beykent University",
            city: "Istanbul",
            status: "Private",
            programsCount: 130,
            actions: [{
                    id: 1,
                    text: "Turkish Language and Literature"
                },
                {
                    id: 2,
                    text: "Acting"
                },
                {
                    id: 3,
                    text: "Communication Arts and Design ASD (With Thesis)"
                }
            ]
        },
        {
            id: 2,
            logo: "/images/71257885-D6D4-43E3-A061-E4FFB11E4090.jpeg",
            title: "Bahcesehir University",
            city: "Istanbul",
            status: "Private",
            programsCount: 201,
            actions: [{
                    id: 1,
                    text: "English Language Teaching"
                },
                {
                    id: 2,
                    text: "Digital Game Design"
                },
                {
                    id: 3,
                    text: "Nutrition and Dietetics"
                }
            ]
        },
        {
            id: 3,
            logo: "/images/92243392_3985582018150691_4847080458522984448_n.jpg",
            title: "Atilim University",
            city: "Ankara",
            status: "Private",
            programsCount: 87,
            actions: [{
                    id: 1,
                    text: "Chemistry PhD"
                },
                {
                    id: 2,
                    text: "Medical Laboratory Techniques"
                },
                {
                    id: 3,
                    text: "Physiotherapy and Rehabilitation (With Thesis)"
                }
            ]
        }
    ]
}

export const universtySlice = createSlice({
    name: "universty",
    initialState: state,
    reducers: {

    }
})

export const selectUniversty = (state) => state.universty.universtyData;

export default universtySlice.reducer;