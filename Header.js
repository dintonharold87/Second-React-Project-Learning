/* We use export default followed by the faunction name that we want to export */
import React from 'react';
export default function Header(){
    return(
        <header>
        <nav>
          <h1>Reasons for learning React</h1>
          <ol>
            <li>It's a cool library</li>
            <li>It's easy to learn</li>
          </ol>
        </nav>
      </header>
    )
}