import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import {
    Container,
    Texto,
    Botao
} from './styles';

export default () => {

const navigation = useNavigation();
    return(
        <Container>
            <Texto>Tela Listar</Texto>
            <Botao title="Ir pra editar" onPress={()=>navigation.navigate('EditNote') } />
        </Container>
    );
}