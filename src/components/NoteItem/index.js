import React from 'react';
import { Box, Title } from './styles';

export default ({ data, index, onPress}) => {
    return (
        <Box onPress={()=>onPress(index)}>     
        <>       
            {alert(data.title)}
            <Title>{data.title}</Title>
            </>
        </Box>
    );
}