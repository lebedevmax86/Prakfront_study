import { Apartment } from '../components/Apartment'

export const ApartmentList = (props) => {
    const { items = [] } = props;
    return (
        <div className="Flats">
        {
        items.map(item => (
            <Apartment key={item.id} {...item} />
        ))        
        }
    </div>
    )
}

