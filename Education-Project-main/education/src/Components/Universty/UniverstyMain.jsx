import React from 'react';
import DiscoveryUniversty from './DiscoveryUniversty';
import UniverstyItem from './UniverstyItem';
import { useSelector } from "react-redux";
import { selectUniversty } from "..//..//redux/reducers/universtySlice";

function UniverstyMain() {
    const datas = useSelector(selectUniversty);
    return (
        <div className="block w-full box-border bg-[#f9fafe]">
            <div className="max-w-[1140px] mx-auto px-[15px]">
                <div className="grid grid-cols-[30%,70%]">
                    <DiscoveryUniversty />
                    <div className="block w-full">
                        {
                            datas.map((w) => {
                                return (
                                    <UniverstyItem key={w.id} {...w} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniverstyMain;