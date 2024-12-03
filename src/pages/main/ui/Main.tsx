import styles from './styles.module.scss'
import {Sidebar} from "../../../widgets/sidebar";
import {useGetProductsQuery} from "../../../entities/product/api/productApi.ts";
import {ProductList} from "../../../widgets/product";
import {Skeleton} from "../../../shared/ui";
import {Slider} from "../../../features/slider";
import {useSearchParams} from "react-router-dom";

const Main = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get("page")) || 1;
    const sort = searchParams.get('sort') || '';
    const order = searchParams.get('order') || '';
    const {data, isLoading} = useGetProductsQuery({page, sort, order})

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
        <main className={styles.main}>
            <Sidebar />
            <div className={styles.content}>
                <Slider />
                <h2 className={styles.title}>All Products</h2>
                <ProductList products={data && data.products}
                             handlePage={handlePage}
                             page={page}
                             total={data ? data.total : 0}
                             handleFilter={handleFilter}
                />
            </div>
        </main>
    );
};

export default Main;