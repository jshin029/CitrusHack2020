import React, { Component } from 'react';
import logo from './assets/logo.svg';
import { Button } from 'antd';
import './css/Home.css';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom';
var thisIsMyCopy = `<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://citrushack.us11.list-manage.com/subscribe/post?u=a4ffe17f16f2df15ff6704c04&amp;id=55c88c1481" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Be the first to know when applications are live!</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a4ffe17f16f2df15ff6704c04_55c88c1481" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<!--End mc_embed_signup--></div>`;
const tangerine = require('./assets/tangerine.png');

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          redirectSub: false,
        }
      }


    handleSub = () => {
        this.setState({
          redirectSub: true
        })
    }


    render() {
        if (this.state.redirectSub){
            return <Redirect push to ="/subscribe" />
        }

        return (
            <div className="container-fluid App">
                <div className="row">
                    <div className="lg-7">
                        <h4 className="App__header-mini">CONNECT . HACK . LEARN .</h4>
                        <h2 className="App__header-main">Citrus Hack 2020</h2>
                        <h3 className="App__header-subMain">Get notified when we launch by joining our mailing list</h3>
                        <div className="App__mobile-container">
                            <button className="App__button-subscribe" onClick={this.handleSub}> Subscribe</button>
                        </div>
                    </div>
                    <div className="lg-5">
                        <img className="App__image" src={tangerine}></img>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
