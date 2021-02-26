/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/react-in-jsx-scope */
import "../style/Checkout.css";
const SetUpItems = (props) => {
    const { tidyData, removeItem, src, id, name, count, price } = props;

    return (
        <div className="holder-main-item" key={"data" + id}>
            <div className="each-cards-checkout">
                <img src={process.env.PUBLIC_URL + src} />
            </div>

            <div className="item-details-checkout">
                <p className="item-name">{name}</p>
            </div>
            
            <div id={id} className="checkout-data">
                <button className="minus" onClick={(e) => tidyData(e)}>-</button>
                <input
                    className="input-type" 
                    type="number"
                    value={count}
                    onChange={(e) => tidyData(e)} 
                    pattern="[1-9]*"
                />
                <button className="plus" onClick={(e) => tidyData(e)}>+</button>
            </div>
            <div className="item-price">
                <p>£{price.toFixed(2)}</p>
            </div>
            <button className="remove-btn" name={id} onClick={(e) => { removeItem(e); }}>Remove</button>
        </div>
    );
    // Should be the same as the one set up in Shopping, but with delete button this time.
};

const TotalView = (props) => {
    const { total } = props;
    return (
        <div className="total-value">
            Total: £{total.toFixed(2)}
        </div>
    );
};

const Checkout = (props) => {
    const { numItems, tidyData, removeItem } = props;
    const validItems = numItems.filter((obj) => (obj.count > 0 || obj.count === "nothing"));
    const isEmpty = validItems.length === 0;
    const sum = validItems.reduce((accum, currVal) => {
        console.log(currVal.count);
        if (currVal.count === "nothing") {
            return accum + (1 * currVal.price);
        }
        return accum + (currVal.count * currVal.price);
        
    }, 0);

    const setUpCheckout = validItems.map((obj, id) => {
        return (
            <SetUpItems
                key={"data" + id}
                src={obj.src}
                id={obj.id}
                name={obj.name}
                count={obj.count}
                price={obj.price}
                tidyData={tidyData}
                removeItem={removeItem}
            />
        );
    // Should be the same as the one set up in Shopping, but with delete button this time.
    });

    const emptyItem = (
        // src = process.env.PUBLIC_URL + "/imgs/fitbit.webp"
        <div className="empty-item">
            <p> Empty </p>
            <img 
                src={process.env.PUBLIC_URL + "/imgs/empty.jpg"}
            />
        </div>
    );
    
    return (
        <div className="main-main-checkout">
            <h3 className="heading">Checkout</h3>
            <div className="main-checkout">
    
                <div className="main-holder-cards-checkout">
                    {isEmpty ? emptyItem : setUpCheckout}
                    <TotalView 
                        total={sum}
                    />
                </div>

            </div>
        </div>
    );
};

export default Checkout;

// If empty display Checkout is Empty
