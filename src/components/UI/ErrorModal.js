import React from 'react';

const ErrorModal = (props) => {
    return (
        <div>
            <div>
                <Card >
                    <header>
                        <h2>{props.title}</h2>
                    </header>
                    <div>
                        <p>{props.message}</p>
                    </div>
                    <footer>
                        <Button>Okay!</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
};

export default ErrorModal;