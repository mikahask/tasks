import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <h1>Mikaylla Website</h1>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScriptS
                </header>
                <div>
                    <h1>Hello World</h1>
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22935cd4-b5b4-4716-98f8-bb6d00156232/de3qhpq-ac4700a1-0404-46d5-9f6f-ad55eda89f6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyOTM1Y2Q0LWI1YjQtNDcxNi05OGY4LWJiNmQwMDE1NjIzMlwvZGUzcWhwcS1hYzQ3MDBhMS0wNDA0LTQ2ZDUtOWY2Zi1hZDU1ZWRhODlmNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nm2goVv_zI3gqXErAWbJPbVK6-KLhr-6HsvU2IzvQ7M"
                        alt="Baby"
                    />
                </div>
                ;
                <p>
                    Hello World Edit <code>src/App.tsx</code> and save. This
                    page will automatically reload. Hello World
                </p>
            </div>
            <div>
                Unordered List:
                <ul>
                    <li>3 cookies</li>
                    <li>1 cookie</li>
                    <li>2 cookies</li>
                </ul>
                Ordered List:
                <ol>
                    <li>1 cookie</li>
                    <li>2 cookies</li>
                    <li>3 cookies</li>
                </ol>
            </div>
            ;
        </>
    );
}

export default App;
