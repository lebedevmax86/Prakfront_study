import { ApartmentList } from '../components/ApartmentList';
import { useState } from 'react';
import  defaultApartments  from '../mock/apartment.json';


export const HomePage = () => {

    const [Flats, setFlats] = useState(defaultApartments)

    return (
        <>
            <h1>Каталог</h1>
            <ApartmentList items={Flats}   />
            
        </>
    )
}

