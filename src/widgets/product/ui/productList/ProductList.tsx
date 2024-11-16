import styles from './styles.module.scss'
import {Product, ProductCard} from "../../../../entities/product";
import {Pagination} from "../../../../features/pagination";
import {Select} from "../../../../shared/ui";

interface Props {
    products?: Product[];
    setPage: (page: number) => void;
    page: number;
    total: number;
    setSort: (sort: string) => void;
    setOrder: (order: string) => void;
}

const ProductList = ({products, setPage, page, total, setSort, setOrder}: Props) => {
    if (!total) {
        return <h2 className={styles.none}>There is no products</h2>
    }

    return (
        <div className={styles.wrapper}>
            <Select setOrder={setOrder} setSort={setSort} />
            <ul className={styles.list}>
                {products?.map(product =>
                    <ProductCard key={product.id} product={product}/>
                )}
            </ul>
            {total > 10 && <Pagination setPage={setPage} page={page} total={total} />}
        </div>
    );
};

export default ProductList;