import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">Description</div>
                {/* <div className="description-nav-box fade">Reviews (122)</div> */}
            </div>
            <div className="descriptionbox-description">
                <p>Electronic commerce (e-commerce) refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices.</p>
                <p>E-commerce operates in several market segments including business-to-business, business-to-consumer, consumer-to-consumer, and consumer-to-business.</p>
            </div>

        </div>
    )
}
export default DescriptionBox;