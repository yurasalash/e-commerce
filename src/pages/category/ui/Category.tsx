import styles from './styles.module.scss'
import {Link, useParams, useSearchParams} from "react-router-dom";
import {useGetProductsByCategoryQuery} from "../../../entities/product/api/productApi.ts";
import {ProductList} from "../../../widgets/product";
import {Skeleton} from "../../../shared/ui";
import {useState} from "react";

const Category = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {category} = useParams()
    const page = Number(searchParams.get("page")) || 1;
    const sort = searchParams.get('sort') || '';
    const order = searchParams.get('order') || '';
    const {data, isLoading} = useGetProductsByCategoryQuery({page, category, sort, order})

    const handlePage = (page: number) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: String(page),
        })
    }

    const handleFilter = (sort: string, order: string) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            sort,
            order
        })
    }

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
                handlePage={handlePage}
                total={data ? data.total : 0}
                handleFilter={handleFilter}
            />
        </div>
    );
};

export default Category;