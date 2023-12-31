import React, {FC, PropsWithChildren} from 'react';

const MaxWithLayout: FC<PropsWithChildren<any>> = ({children}) => {

    return (
        <div style={{
            maxWidth: 1460,
            margin: '0 auto',
            padding: '0 20px',
        }}>
            {children}
        </div>
    );
};

export default MaxWithLayout;