import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProdactPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    // Filter and sort states
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sort, setSort] = useState('Newest first');

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/product', {
                params: {
                    page: currentPage,
                    brand,
                    category,
                    minimum: priceRange ? priceRange.split('-')[0] : '',
                    maximum: priceRange ? priceRange.split('-')[1] : '',
                    sort,
                }

            });

            const { data } = response;
            console.log(data);
            setProducts(data.data);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };
    console.log(priceRange ? priceRange.split('-')[0] : '',);
    console.log(priceRange ? priceRange.split('-')[1] : '',)

    useEffect(() => {
        fetchProducts();
    }, [currentPage, brand, category, priceRange, sort]);
    console.log(currentPage);
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center my-10">
                <div>
                    <details className="dropdown mr-5">
                        <summary className="m-1">Date Added</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li onClick={() => setSort('Newest first')}><a>Latest</a></li>
                            <li onClick={() => setSort('Oldest first')}><a>Oldest</a></li>
                        </ul>
                    </details>

                    <details className="dropdown">
                        <summary className="m-1">Price</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box md:w-32 w-20">
                            <li onClick={() => setSort('Low to High')}><a>Low - High</a></li>
                            <li onClick={() => setSort('High to Low')}><a>High - Low</a></li>
                        </ul>
                    </details>
                </div>
                <div className="space-x-5">
                    <select
                        name="brand"
                        className="select border-[#142e35] border w-52 max-w-xs"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">All Brands</option>
                        <option value="Laneige">Laneige</option>
                        <option value="Innisfree">Innisfree</option>
                        <option value="Sulwhasoo">Sulwhasoo</option>
                        <option value="Etude House">Etude House</option>
                        <option value="The Face Shop">The Face Shop</option>
                        <option value="TonyMoly">TonyMoly</option>
                        <option value="Holika Holika">Holika Holika</option>
                        <option value="Skinfood">Skinfood</option>
                    </select>
                    <select
                        name="category"
                        className="select border-[#142e35] border w-52 max-w-xs"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">ALL Categories</option>
                        <option value="Skincare">Skincare</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Skincare & Makeup">Skincare & Makeup</option>
                        <option value="Skincare & Lip Care">Skincare & Lip Care</option>
                    </select>
                    <select
                        name="priceRange"
                        className="select border-[#142e35] border w-52 max-w-xs"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                    >
                        <option value="">All range</option>
                        <option value="1-10">1 - 10</option>
                        <option value="11-20">10 - 20</option>
                        <option value="21-30">21 - 30</option>
                        <option value="31-40">31 - 40</option>
                        <option value="41-50">41 - 50</option>
                        <option value="51-100">51 - 100</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {products.length > 0 ? (
                        <>
                            <div>
                                {products.map(product => (

                                    <div key={product._id} className="card bg-base-100 w-96 shadow-xl">
                                        <figure>
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{product.product_name}</h2>
                                            <p>Price:{product.price_range}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </>
                    ) : (
                        <p>No products found.</p>
                    )}
                </>
            )}
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center my-5">
            <button
                className="btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    className={`btn ${page === currentPage ? 'btn-active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default ProdactPage;
