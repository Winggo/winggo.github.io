import * as React from 'react';

interface props {
    logo: string,
    toAbout: React.RefObject<HTMLDivElement>,
    alt: string,
}

export default function scrollTo(props: props) {
    return (
        <div style={{textAlign: 'center', marginTop: '35vh'}}>
            <img
                src={props.logo}
                onClick={() => props.toAbout.current?.scrollIntoView({behavior: 'smooth'})}
                style={{
                    textAlign: 'center', 
                    width: '50px', 
                    height: '50px', 
                    pointerEvents: 'all', 
                    opacity: 0.7,
                    animation: 'bounce 2s infinite',
                    cursor: 'pointer',
                }}
                alt={props.alt} />
        </div>
    );
}