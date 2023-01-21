import React, { useState } from "react";
import { AntDesign, Feather } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, } from 'react-native';

import {
    Container,
    Title,
    Content,
    BoxHeader, Photo, BoxInfoHeader, Email, ButtonEdit, EditPhoto,
    BoxSelect, TitleInfo, BoxTypePerson, ContentTypeActive, TextActive, ContentType, Text, ContentInput, Input,
    BoxTypePurchase, TypePurchaseOne, TypePurchaseTwo, TypePurchaseOneActive, TypePurchaseTwoActive,
    DescriptionTel
} from './styles'

export default function Dashboard() {
    const [typeLegal, setTypeLegal] = useState(true);
    const [typePhysical, setTypePhysical] = useState(false);

    const [typePurchaseOne, setTypePurchaseOne] = useState(false);
    const [typePurchaseTwo, setTypePurchaseTwo] = useState(false);

    function ActiveLegal() {
        setTypeLegal(true)
        setTypePhysical(false)
    }

    function ActivePhysical() {
        setTypePhysical(true)
        setTypeLegal(false)
    }

    function ActivePurchaseOne() {
        setTypePurchaseOne(true)
        setTypePurchaseTwo(false)
    }

    function ActivePurchaseTwo() {
        setTypePurchaseTwo(true)
        setTypePurchaseOne(false)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <Title>Meu Cadastro</Title>

                    <Content>
                        <BoxHeader>
                            <Photo>
                                <AntDesign name="user" size={45} color="white" />
                            </Photo>

                            <BoxInfoHeader>
                                <Email>daniellemoscatelli@gmail.com</Email>

                                <ButtonEdit>
                                    <Feather name="edit" size={17} color="#fa8202" />
                                    <EditPhoto>Alterar foto</EditPhoto>
                                </ButtonEdit>
                            </BoxInfoHeader>
                        </BoxHeader>

                        <BoxSelect>
                            <TitleInfo>Selecione o tipo e conta que deseja criar:</TitleInfo>

                            <BoxTypePerson>
                                {typeLegal ? (
                                    <ContentTypeActive>
                                        <TextActive>Pessoa Jurídica</TextActive>
                                    </ContentTypeActive>
                                ) : (
                                    <ContentType onPress={ActiveLegal}>
                                        <Text>Pessoa Jurídica</Text>
                                    </ContentType>
                                )}

                                {typePhysical ? (
                                    <ContentTypeActive>
                                        <TextActive>Pessoa Física</TextActive>
                                    </ContentTypeActive>
                                ) : (
                                    <ContentType onPress={ActivePhysical}>
                                        <Text>Pessoa Física</Text>
                                    </ContentType>
                                )}
                            </BoxTypePerson>

                            {typeLegal && (
                                <ContentInput>
                                    <Input
                                        placeholder="Informe um CPF"
                                        keyboardType="numeric"
                                    />
                                </ContentInput>
                            )}

                            {typePhysical && (
                                <ContentInput>
                                    <Input
                                        placeholder="Informe um CNPJ"
                                        keyboardType="numeric"
                                    />
                                </ContentInput>
                            )}
                        </BoxSelect>

                        <BoxSelect>
                            <TitleInfo>Você está comprando no Atacadão para:</TitleInfo>

                            <BoxTypePurchase>
                                {typePurchaseOne ? (
                                    <TypePurchaseOneActive>
                                        <TextActive>Consumir</TextActive>
                                    </TypePurchaseOneActive>
                                ) : (
                                    <TypePurchaseOne onPress={ActivePurchaseOne}>
                                        <Text>Consumir</Text>
                                    </TypePurchaseOne>
                                )}

                                {typePurchaseTwo ? (
                                    <TypePurchaseTwoActive>
                                        <TextActive>Revender</TextActive>
                                    </TypePurchaseTwoActive>
                                ) : (
                                    <TypePurchaseTwo onPress={ActivePurchaseTwo}>
                                        <Text>Revender</Text>
                                    </TypePurchaseTwo>
                                )}


                            </BoxTypePurchase>

                        </BoxSelect>

                        <BoxSelect>
                            <TitleInfo>Dados de contato:</TitleInfo>

                            <ContentInput>
                                <Input
                                    placeholder="Nome"
                                />
                            </ContentInput>
                            <ContentInput>
                                <Input
                                    placeholder="Sobre Nome"
                                />
                            </ContentInput>

                            <TitleInfo>Telefone:</TitleInfo>
                            <DescriptionTel>O telefone é importante caso a gente precise entrar em contato sobre um pedido</DescriptionTel>
                            <ContentInput>
                                <Input
                                    placeholder="Telefone Celular"
                                />
                            </ContentInput>
                            <ContentInput>
                                <Input
                                    placeholder="Telefone Fixo (opcional)"
                                />
                            </ContentInput>
                            <ContentInput>
                                <Input
                                    placeholder="Data de nascimento"
                                />
                            </ContentInput>
                        </BoxSelect>
                    </Content>
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}