import type { FC, PropsWithChildren } from "react";

import './Greeting.css';

interface GreetingProps extends PropsWithChildren {
    name: string;
    surname: string;
}

const Greeting: FC<GreetingProps> = ({ name, surname }) => {
    return (
        <div>
            <span>Hello {name} {surname}</span>

            <button className="expense">Add expense</button>
            <button className="selling">Add expense</button>
        </div>
    )
};

export default Greeting;