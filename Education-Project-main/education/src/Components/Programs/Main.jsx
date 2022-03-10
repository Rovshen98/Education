import React from 'react';
import DiscoverPropgrams from './DiscoverPropgrams';
import ProgramsItem from './ProgramsItem';
import { useSelector } from 'react-redux';
import { selectPrograms } from '../../redux/reducers/programsSlice';

function Main() {
    const datas = useSelector(selectPrograms);
    return (
        <div className='w-full block box-border'>
            <div className="max-w-[1140px] mx-auto px-[15px]">
                <div className="grid grid-cols-[30%,70%]">
                    <DiscoverPropgrams />
                    <div className="block w-full">
                        {
                            datas.map((item) => {
                                return (
                                    <ProgramsItem key={item.id} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;