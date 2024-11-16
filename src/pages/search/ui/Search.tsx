import styles from './styles.module.scss'
import {useParams} from "react-router-dom";
import {useState} from "react";
import {useGetProductsByQueryQuery} from "../../../entities/product/api/productApi.ts";
import {Skeleton} from "../../../shared/ui";
import {ProductList} from "../../../widgets/product";

const Search = () => {
    const {q} = useParams()
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('');
    const [sort, setSort] = useState('');
    const {data, isLoading} = useGetProductsByQueryQuery({page, q, sort, order})

    if (isLoading) {
        return <Skeleton />
    }

    if (!data) {
        return <h2 className={styles.empty}>There is no Products</h2>
    }

    return (
        <div className={styles.search}>
            <h2 className={styles.title}>{q}:</h2>
            {data && <ProductList products={data && data.products}
                                  page={page}
                                  setPage={setPage}
                                  setSort={setSort}
                                  setOrder={setOrder}
                                  total={data ? data.total : 0}
            />}
        </div>
    );
};

export default Search;