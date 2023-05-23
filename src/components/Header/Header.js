import { Component } from 'react';
import HeaderJsx from './Header.jsx';
import './Header.css';

class MainHeader extends Component {
    render() {
        return (
            HeaderJsx(this)
        );
    }
}

export default MainHeader;