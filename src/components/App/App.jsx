import React, { Component } from 'react';

import './App.css';
import EventList from '../EventList/EventList';

class App extends Component {
	
// 	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum sollicitudin ultrices. Nulla velit risus, faucibus a nulla eget, iaculis volutpat erat. Proin sit amet egestas odio. Proin nec lobortis lorem, eu gravida eros. Vivamus dignissim eros vitae erat consequat, in tempor risus fermentum. Suspendisse commodo vestibulum eleifend. Nam hendrerit erat et tortor lobortis, eu vehicula magna pulvinar. Suspendisse aliquam ultrices eros, vel rutrum odio.

// Curabitur non orci semper, bibendum sapien finibus, maximus dolor. Maecenas mollis finibus tortor, quis blandit orci. Fusce quis lorem ac diam rhoncus dapibus nec id felis. Curabitur nec ullamcorper nunc. Donec placerat justo eget ligula placerat, at cursus mauris consequat. Quisque nisl purus, convallis vel sodales id, hendrerit mollis turpis. Aenean vitae ultricies odio. Donec lacinia magna eu risus luctus, ut vehicula tortor imperdiet. Vivamus faucibus, leo ut feugiat malesuada, sapien diam scelerisque mauris, vel pretium urna lectus sed eros. Donec luctus mauris quis eros vulputate egestas. Fusce accumsan quam vel orci placerat, vel fringilla arcu vulputate. Etiam volutpat mauris nisi, id dignissim tortor laoreet vitae. Morbi nec auctor libero. Nam finibus nisi odio, et sodales odio ullamcorper a.

// Phasellus ac accumsan enim. Maecenas porttitor risus in tortor molestie imperdiet. Fusce eu tortor mattis urna lobortis lobortis vel non leo. Proin egestas dui ut augue consectetur molestie. Nunc vitae dictum ante, id iaculis eros. Curabitur ante nisl, posuere eget lectus a, sodales mattis odio. Sed blandit consectetur convallis. Etiam id volutpat leo, id iaculis velit. Aliquam scelerisque at nisl ut porttitor. Integer facilisis cursus est, sed pharetra nibh consectetur ac. Curabitur dui elit, finibus non massa vitae, dictum hendrerit dolor. Suspendisse potenti. Quisque dignissim tristique lacus ut bibendum. Pellentesque sapien mauris, ultrices ut ultrices non, feugiat et sapien. Phasellus bibendum justo diam, vitae scelerisque justo luctus nec.
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-header__logo">
						<img className="logo"src="https://d30y9cdsu7xlg0.cloudfront.net/png/15343-200.png" alt="Qual a Boa Joinville?"/>
					</div>
				
					<div className="App-header__title">
						<h1>Qual a boa Joinville?</h1>
					</div>
				</header>
				{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum sollicitudin ultrices. Nulla velit risus, faucibus a nulla eget, iaculis volutpat erat. Proin sit amet egestas odio. Proin nec lobortis lorem, eu gravida eros. Vivamus dignissim eros vitae erat consequat, in tempor risus fermentum. Suspendisse commodo vestibulum eleifend. Nam hendrerit erat et tortor lobortis, eu vehicula magna pulvinar. Suspendisse aliquam ultrices eros, vel rutrum odio.

Curabitur non orci semper, bibendum sapien finibus, maximus dolor. Maecenas mollis finibus tortor, quis blandit orci. Fusce quis lorem ac diam rhoncus dapibus nec id felis. Curabitur nec ullamcorper nunc. Donec placerat justo eget ligula placerat, at cursus mauris consequat. Quisque nisl purus, convallis vel sodales id, hendrerit mollis turpis. Aenean vitae ultricies odio. Donec lacinia magna eu risus luctus, ut vehicula tortor imperdiet. Vivamus faucibus, leo ut feugiat malesuada, sapien diam scelerisque mauris, vel pretium urna lectus sed eros. Donec luctus mauris quis eros vulputate egestas. Fusce accumsan quam vel orci placerat, vel fringilla arcu vulputate. Etiam volutpat mauris nisi, id dignissim tortor laoreet vitae. Morbi nec auctor libero. Nam finibus nisi odio, et sodales odio ullamcorper a.

Phasellus ac accumsan enim. Maecenas porttitor risus in tortor molestie imperdiet. Fusce eu tortor mattis urna lobortis lobortis vel non leo. Proin egestas dui ut augue consectetur molestie. Nunc vitae dictum ante, id iaculis eros. Curabitur ante nisl, posuere eget lectus a, sodales mattis odio. Sed blandit consectetur convallis. Etiam id volutpat leo, id iaculis velit. Aliquam scelerisque at nisl ut porttitor. Integer facilisis cursus est, sed pharetra nibh consectetur ac. Curabitur dui elit, finibus non massa vitae, dictum hendrerit dolor. Suspendisse potenti. Quisque dignissim tristique lacus ut bibendum. Pellentesque sapien mauris, ultrices ut ultrices non, feugiat et sapien. Phasellus bibendum justo diam, vitae scelerisque justo luctus nec. */}
				<EventList >
					{this.state}
				</EventList>
		  </div>
		);
	}
}

export default App;
