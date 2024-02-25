import React from "react";
import { images } from "../constants";
const header = () => {
    return(
    <section>
<header>
<div>
    <img src={images.Logo} alt="Logo" />
</div>
<div>
    <ul>
        <li>
            <a href="/">home</a>
        </li>
        <li>
            <a href="/">Article</a>
        </li>
        <li>
            <a href="/">pages</a>
        </li>
        <li>
            <a href="/">pricing</a>
        </li>
        <li>
            <a href="/">Faq</a>
        </li>
    </ul>
</div>
</header>
</section>
    );
};
export default header;