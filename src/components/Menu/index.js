import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode';

import {Container,Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';


export default function Menu() {
    return (
        <Container>
            <Code>
                <QRCode value="http://globoesporte.com"
                 size={80} 
                 bgColor="#8B10AE"
                 fgColor="#FFF" />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={ () => {} }> 
                <SignOutButtonText>Sair da conta</SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}