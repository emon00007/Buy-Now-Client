const ProdactPage = () => {
    return (
        <div >
           <div className="flex justify-between items-center my-10">
                <div>
                    <details className="dropdown mr-5">
                        <summary className="m-1 ">Date Added</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                            <li  ><a>Latest </a></li>
                            <li  ><a>Oldest </a></li>
                        </ul>
                    </details>

                    <details className="dropdown">
                        <summary className="m-1 ">Price</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1]  bg-base-100 rounded-box md:w-32 w-20">
                            <li  ><a>Low - High</a></li>
                            <li  ><a>High - Low</a></li>
                        </ul>
                    </details>
                </div>
              <div className="space-x-5">
              <select name="brand"  className="select border-[#142e35] border w-52 max-w-xs">
                    <option disabled selected>Select Brand</option>
                    <option value="" >All Brands</option>
                    <option value="Laneige">Laneige</option>
                    <option value="Innisfree">Innisfree</option>
                    <option value="Sulwhasoo">Sulwhasoo</option>
                    <option value="Etude House" >Etude House</option>
                    <option value="The Face Shop">The Face Shop</option>
                    <option value="TonyMoly">TonyMoly</option>
                    <option value="Holika Holika">Holika Holika</option>
                    <option value="Skinfood">Skinfood</option>

                
                </select>
                <select name="category"  className="select border-[#142e35] border w-52 max-w-xs">
                    <option disabled selected>Select Categories</option>
                    <option value="">ALL Categories</option>
                    <option value="Skincare">Skincare</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Skincare & Makeup">Skincare & Makeup</option>
                    <option value="Skincare & Lip Care">Skincare & Lip Care</option>

                </select>
                <select name="priceRange"  className="select border-[#142e35] border w-52 max-w-xs">
                        <option disabled selected>Select Price Range</option>
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
        </div>
    );
};

export default ProdactPage;