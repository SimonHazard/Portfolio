import * as React from 'react';

interface IProps {
    name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <header className="App-header">{props}</header>
);

export default Header;