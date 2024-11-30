import styles from './styles.module.scss'
import {useParams, useSearchParams} from "react-router-dom";
import {useState} from "react";
import {useGetProductsByQueryQuery} from "../../../entities/product/api/productApi.ts";
import {Skeleton} from "../../../shared/ui";
import {ProductList} from "../../../widgets/product";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const {q} = useParams()
    const page = Number(searchParams.get("page")) || 1;
    const order = searchParams.get("order") || '';
    const sort = searchParams.get('sort') || '';
    const {data, isLoading} = useGetProductsByQueryQuery({page, q, sort, order})

    if (isLoading) {
        return <Skeleton />
    }

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

    if (data && data.products.length === 0) {
        return <h2 className={styles.empty}>
            There is no Products with query: {(q?.length || 0) > 10 ? `${q?.slice(0, 9)}...` : q}
            </h2>
    }

    return (
        <div className={styles.search}>
            {data && <div className={styles.title}>You searched: <span>{q}</span></div>}
            {data && <ProductList products={data && data.products}
                                  page={page}
                                  handlePage={handlePage}
                                  handleFilter={handleFilter}
                                  total={data ? data.total : 0}
            />}
        </div>
    );
};

export default Search;