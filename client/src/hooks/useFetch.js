import { useEffect, useState } from "react";

export function useFetch(url, initialData, method = "GET", body = null) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: method === "POST" || method === "PUT" || method === "PATCH" || method === "DELETE" ? JSON.stringify(body) : null
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                setIsFetching(false);
            }
        })();
    }, [url, toggleRefetch]);

    const refetch = () => {
        setToggleRefetch(state => !state);
    };

    return {
        data,
        isFetching,
        refetch
    };
}
