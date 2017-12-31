import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import * as style from './style.css';

export interface HeaderProps { }
export interface HeaderState { }

export default class Header extends Component<HeaderProps, HeaderState> {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
