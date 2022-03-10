import {
    createSlice
} from "@reduxjs/toolkit";

const state = {
    achvmntsData: [{
            id: 1,
            imgSrc: "/images/Medipol_oktamam-300x300.jpg",
            desc: "OK TAMAM’s CEO, Mr. Ahmed delivering the Annual Report to Mr. Abdullah Selim, Istanbul Medipol University’s International Office Director."
        },
        {
            id: 2,
            imgSrc: "/images/Aydin_oktamam-300x300.jpg",
            desc: "Mrs. Serpil Darwish, PR Director at OK TAMAM delivering the Annual Report to Mr. Sohaib Hassan, Istanbul Aydin University’s International Office Director."
        },
        {
            id: 3,
            imgSrc: "/images/Istinye_oktamam-300x300.jpg",
            desc: "OK TAMAM’s CEO, Mr. Ahmed delivering the Annual Report to Mr. İsmail ÇİFTÇİ , Istinye University’s International Office Director."
        },
        {
            id: 4,
            imgSrc: "/images/Ozyegin_oktamam-300x300.jpg",
            desc: "Mr. Danış Tuğrul Gözcü, Özyeğin University’s International Office Director during a visit to OK TAMAM office, met Mr. Ahmed Darwish, OK TAMAM’s CEO."
        }
    ]
}

export const achievementsSlice = createSlice({
    name:"achievements",
    initialState:state,
    reducers:{

    }
})

export const selectAchievements = (state) => state.achievements.achvmntsData;

export default achievementsSlice.reducer;