import React, { Component } from 'react';
import logo from './assets/logo.svg';
import { Button } from 'antd';
import './css/Subscribe.css';
import Parser from 'html-react-parser';
var mailchimpCode = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background: #ececee; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://citrushack.us11.list-manage.com/subscribe/post?u=a4ffe17f16f2df15ff6704c04&amp;id=55c88c1481" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label style="color:white;" for="mce-EMAIL">Be the first to know when applications are live!</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a4ffe17f16f2df15ff6704c04_55c88c1481" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<!--End mc_embed_signup--></div>`;
const tangerine = require('./assets/tangerine.png');

class Subscribe extends Component {


    render() {
        return (
            <div className="container-fluid Subscribe">

                <div className="content">{Parser(mailchimpCode)}</div>
                    <div className="lg-5">
                        <img className="Subscribe__image" src={tangerine}></img>
                    </div>

            </div>
            );
}
}


export default Subscribe;
