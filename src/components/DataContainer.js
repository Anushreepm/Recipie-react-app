import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function DataContainer(props) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="data-container-header">
        <div className="slno">Sl.no</div>
        <div className="name">Name</div>
        <div className="lastupdated">Last Updated</div>
        <div className="cogs">COGS</div>
        <div className="costprice">COST PRICE</div>
        <div className="saleprice">SALE PRICE</div>
        <div className="grossmargin">GROSS MARGIN</div>
        <div className="tags">TAGS/ACTIONS</div>
      </div>
      <div className="data-container-body">
        <InfiniteScroll
          dataLength={data.data.length}
          next={data.fetchData}
          hasMore={data.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>you reached the end</b>
            </p>
          }
        >
          {data.data.map((recipe) => (
            <div className="data-container-block" key={recipe.id}>
              <div className="slno">*</div>
              <div className="name">{recipe.name}</div>
              <div className="lastupdated"></div>
              <div className="cogs">{recipe.cogs}</div>
              <div className="costprice">{recipe.cost_price.toFixed(3)}</div>
              <div className="saleprice">
                {recipe.current_sale_price.toFixed(3)}
              </div>
              <div className="grossmargin">
                {recipe.gross_margin.toFixed(3)}
              </div>
              <div className="tags">TAGS/ACTIONS</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}

export default DataContainer;
