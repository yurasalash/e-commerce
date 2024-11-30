import styles from './styles.module.scss'
import {Product, ProductCard} from "../../../../entities/product";
import {Pagination} from "../../../../features/pagination";
import {Select} from "../../../../shared/ui";

interface Props {
    products?: Product[];
    handlePage: (page: number) => void;
    page: number;
    total: number;
    handleFilter: (sort: string, order: string) => void;
}

const ProductList = ({products, handlePage, page, total, handleFilter}: Props) => {
    if (!total) {
        return <h2 className={styles.none}>There is no products</h2>
    }

    return (
        <div className={styles.wrapper}>
            <Select handleFilter={handleFilter} />
            <ul className={styles.list}>
                {products?.map(product =>
                    <ProductCard key={product.id} product={product}/>
                )}
            </ul>
            {total > 10 && <Pagination handlePage={handlePage} page={page} total={total} />}
        </div>
    );
};

export default ProductList;