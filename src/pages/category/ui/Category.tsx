import styles from './styles.module.scss'
import {Link, useParams} from "react-router-dom";
import {useGetProductsByCategoryQuery} from "../../../entities/product/api/productApi.ts";
import {ProductList} from "../../../widgets/product";
import {Skeleton} from "../../../shared/ui";
import {useState} from "react";

const Category = () => {
    const {category} = useParams()
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');
    const {data, isLoading} = useGetProductsByCategoryQuery({page, category, sort, order})

    if (isLoading) {
        return <Skeleton />
    }

    return (
        <div className={styles.category}>
            <div className={styles.title}>
                <Link to='/' className={styles.link}>Home</Link>
                <span>{'>'}</span>
                <Link to={`/categories/${category}`} className={styles.link}>{category}</Link>
            </div>
            <ProductList
                products={data && data.products}
                page={page}
                setPage={setPage}
                total={data ? data.total : 0}
                setSort={setSort}
                setOrder={setOrder}
            />
        </div>
    );
};

export default Category;