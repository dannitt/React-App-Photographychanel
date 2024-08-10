import { usePhotoContext } from "../../contexts/PhotoContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";
import './Catalog.css';

export const Catalog = () => {

const { photos } = usePhotoContext();

    return (
        <section>
            <h1 style={{color: "purple"}}>All photos</h1>
            <div className="catalog">
                {photos.map(x => 
                    <CatalogItem key={x._id} {...x} />
                )}
            </div>
                {!photos.length && (
                    <h3>No articles yet</h3>
                )}
            
        </section>
    );
}