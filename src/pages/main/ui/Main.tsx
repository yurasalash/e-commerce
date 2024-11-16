import styles from './styles.module.scss'
import {Sidebar} from "../../../widgets/sidebar";
import {useGetProductsQuery} from "../../../entities/product/api/productApi.ts";
import {ProductList} from "../../../widgets/product";
import {Skeleton} from "../../../shared/ui";
import {useState} from "react";

const Main = () => {
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');
    const {data, isLoading} = useGetProductsQuery({page, sort, order})

    if (isLoading) {
        return <Skeleton />
    }

    return (
        <main className={styles.main}>
            <Sidebar />
            <div className={styles.content}>
                <h2 className={styles.title}>All Products</h2>
                <ProductList products={data && data.products}
                             setPage={setPage}
                             page={page}
                             total={data ? data.total : 0}
                             setSort={setSort}
                             setOrder={setOrder}
                />
            </div>
        </main>
    );
};

export default Main;