import { Products } from "@/common/types/Products";

async function fetchProducts(): Promise<Products[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });
  return res.json();
}

const ProductPage = async () => {
  const products = await fetchProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <span> - </span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

//? Документация, по ссылке: https://fakeapi.platzi.com/en/rest/products/

// _______________________________________
// SERVER COMPONENTS

// 1. SSG - static site generation - когда нету изменяемых данных - все статическое
// Build -- render
// User #1 ---> /about -> send html response

// 2. SSR - server site rendering
// - каждый раз выполняется запрос на сервере когда пользователь стучится на страницу
//  cache: "no-store", мы должны указать
// Build
// -- no fetch -- no render
// --
// User #1 ---> /users --> Server fetch(fetchUsers) --> render --> send response
// User #2 ---> /users --> Server fetch(fetchUsers) --> render --> send response

// 3. ISR - incremental static regeneration
// The response is the sam for everyone
// {next: {revalidate: 60}}

// Build --> no fetch -- no render
// User #1 ---> /users --> server fetch --> render --> send response +
// save html in cash for next 60 sec

// User #2 ---> /users --> send cashed html
// (60s passes)

// User #3 ---> /users --> send cashed html (stale - несвежий)
//              -> background запускается fetch and stores render in cash

// User #4 ---> /users --> send cashed html (fresh)
