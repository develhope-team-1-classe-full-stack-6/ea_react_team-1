import React from 'react';
import PagesContainer from '../../layout/PagesContainer';

const PageNotFound = () => {
    return (
        <PagesContainer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: '50vh',
                    fontSize: '3rem',
                    marginLeft: '4rem'                    
                }}
            >
                <h1
                    style={{
                        fontSize: '4rem',
                    }}
                >404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </PagesContainer>
    );
}

export default PageNotFound;